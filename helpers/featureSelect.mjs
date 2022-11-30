import fs from 'fs-extra';
import PackageJson from '@npmcli/package-json';
import path from 'path';
import { fileURLToPath } from 'url';
import { getFilesRecursively } from './ci/NodeHelpers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv;

async function removeScript(scriptName) {
  const pkgJson = await PackageJson.load('.');
  const newScripts = { ...pkgJson.content.scripts };
  delete newScripts[scriptName];
  pkgJson.update({ scripts: newScripts });
  await pkgJson.save();
}

async function removePackages(packageNames) {
  const pkgJson = await PackageJson.load('.');
  const newDependencies = { ...pkgJson.content.dependencies };
  const newDevDependencies = { ...pkgJson.content.devDependencies };
  packageNames.forEach((packageName) => {
    delete newDependencies[packageName];
    delete newDevDependencies[packageName];
  });
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
    .map(f => fs.removeSync(f));
}

async function removeStorycap() {
  fs.removeSync('.stories-approved');
  fs.removeSync('.stories-pending');
  fs.removeSync('.storycap-pending');

  await removePackages(['storycap']);
  await removeScript('stories-check');
}

async function removeStorybook() {
  fs.removeSync('.storybook');
  deleteFiles('../components', /\.stories\..*$/);
  deleteFiles('../views', /\.stories\..*$/);
  await removePackages([
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addons',
    '@storybook/builder-webpack5',
    '@storybook/manager-webpack5',
    '@storybook/react',
    'eslint-plugin-storybook',
    'storybook-addon-next'
  ]);
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