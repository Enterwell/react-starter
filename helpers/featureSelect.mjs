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
  const newDependencies = { ...pkgJson.content.dependencies };
  const newDevDependencies = { ...pkgJson.content.devDependencies };
  delete newDependencies[packageName];
  delete newDevDependencies[packageName];
  pkgJson.update({
    dependencies: newDependencies,
    devDependencies: newDevDependencies
  });
  await pkgJson.save();
}

function deleteFiles(directoryPath, regex) {
  const pathName = path.join(__dirname, directoryPath);
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
  deleteFiles('../components', /\.stories\..*$/);
  deleteFiles('../views', /\.stories\..*$/);
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

// TODO: Add cypress
// TODO: Add jest