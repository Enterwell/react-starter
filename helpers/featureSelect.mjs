import fs from 'fs';
import rimraf from 'rimraf';
import PackageJson from '@npmcli/package-json';
import path from 'path';
import { fileURLToPath } from 'url';
import { getFilesRecursively } from './ci/NodeHelpers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv;

function deleteDirectory(path) {
  try {
    rimraf.sync(path);
  } catch (err) {
    console.error(err);
  }
}

async function removeScript(scriptName) {
  const pkgJson = await PackageJson.load('.');
  const newScripts = { ...pkgJson.content.scripts };
  delete newScripts[scriptName];
  pkgJson.update({ scripts: newScripts });
  await pkgJson.save();
}

async function removePackage(packageName) {
  const pkgJson = await PackageJson.load('.');
  pkgJson.update({
    dependencies: {
      ...pkgJson.content.dependencies,
      [packageName]: undefined
    },
    devDependencies: {
      ...pkgJson.content.devDependencies,
      [packageName]: undefined
    }
  });
  await pkgJson.save();
}

function deleteFiles(regex) {
  const pathName = path.join(__dirname, '../');
  getFilesRecursively(pathName)
    .filter(f => regex.test(f))
    .map(f => fs.unlinkSync(f));
}

async function removeStorycap() {
  deleteDirectory('.stories-approved');
  deleteDirectory('.stories-pending');
  deleteDirectory('.storycap-pending');

  await removePackage('storycap');
  await removeScript('stories-check');
}

async function removeStorybook() {
  deleteDirectory('.storybook');
  deleteFiles(/\.stories\..*$/);
  await removePackage('@storybook/addon-actions');
  await removePackage('@storybook/addon-essential');
  await removePackage('@storybook/addon-link');
  await removePackage('@storybook/addons');
  await removePackage('@storybook/builder-webpack');
  await removePackage('@storybook/manager-webpack');
  await removePackage('@storybook/react');
  await removePackage('eslint-plugin-storybook');
  await removePackage('storybook-addon-next');
  await removeScript('storybook');
  await removeScript('build-storybook');

  // TODO: Edit .eslintrc remove storybook plugin
}

if (args.includes('storycap') || args.includes('storybook')) {
  await removeStorycap();
}
if (args.includes('storybook')) {
  await removeStorybook();
}
