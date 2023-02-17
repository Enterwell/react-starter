import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/extensions
import { getFilesRecursively } from './ci/NodeHelpers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv;

async function setScript(scriptName, value = undefined) {
  const pkgJson = fs.readJsonSync('package.json');
  const newScripts = { ...pkgJson.scripts };
  if (!value) {
    delete newScripts[scriptName];
  } else {
    newScripts[scriptName] = value;
  }
  pkgJson.scripts = newScripts;
  fs.writeJsonSync('package.json', pkgJson, { spaces: 4 });
}

async function removePackages(packageNames) {
  const pkgJson = fs.readJsonSync('package.json');
  const newDependencies = { ...pkgJson.dependencies };
  const newDevDependencies = { ...pkgJson.devDependencies };
  packageNames.forEach((packageName) => {
    delete newDependencies[packageName];
    delete newDevDependencies[packageName];
  });
  pkgJson.dependencies = newDependencies;
  pkgJson.devDependencies = newDevDependencies;
  fs.writeJsonSync('package.json', pkgJson, { spaces: 4 });
}

function deleteFiles(directoryPath, regex) {
  const pathName = path.join(__dirname, directoryPath);
  getFilesRecursively(pathName)
    .filter((f) => regex.test(f))
    .map((f) => fs.removeSync(f));
}

async function removeStorycap() {
  fs.removeSync('.stories-approved');
  fs.removeSync('.stories-pending');
  fs.removeSync('.storycap-pending');

  await removePackages(['storycap', 'puppeteer']);
  await setScript('stories-check');
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
  await setScript('storybook');
  await setScript('build-storybook');

  // Edit .eslintrc remove storybook plugin
  const eslintObj = fs.readJsonSync('.eslintrc');
  eslintObj.extends = eslintObj.extends.filter((i) => i !== 'plugin:storybook/recommended');
  fs.writeJsonSync('.eslintrc', eslintObj, { spaces: 4 });
}

async function removeCypress() {
  fs.removeSync('.cypress-approved');
  fs.removeSync('.cypress-pending');
  fs.removeSync('cypress');
  fs.removeSync('tests/component');
  fs.removeSync('tests/integration');
  fs.removeSync('./cypress.config.js');
  await removePackages([
    '@cypress/react',
    '@cypress/webpack-dev-server',
    'cypress',
    'start-server-and-test'
  ]);
  await setScript('test');
  await setScript('cypress-run');
  await setScript('cypress-run:ci');
  await setScript('cypress-open');
  await setScript('cypress-check');
  await setScript('e2e-test');
  await setScript('e2e-test:ci');
  await setScript('e2e-test-open');
  await setScript('component-test');
  await setScript('component-test:ci');
  await setScript('component-test-open');
}

async function removeJest() {
  fs.removeSync('tests/unit');
  fs.removeSync('./jest.config.js');
  await removePackages(['jest', 'jest-environment-jsdom']);
  await setScript('unit-test');
}

if (args.includes('storycap') || args.includes('storybook')) {
  await removeStorycap();
}
if (args.includes('storybook')) {
  await removeStorybook();
}
if (args.includes('cypress')) {
  await removeCypress();
}
if (args.includes('jest')) {
  await removeJest();
}
