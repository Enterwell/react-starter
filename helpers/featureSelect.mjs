import { fileURLToPath } from 'url';
import path from 'path';

import fs from 'fs-extra';

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
    '@storybook/nextjs',
    'eslint-plugin-storybook',
    'storybook'
  ]);
  await setScript('storybook');
  await setScript('build-storybook');

  // Edit .eslintrc.json remove storybook plugin
  const eslintObj = fs.readJsonSync('.eslintrc.json');
  eslintObj.extends = eslintObj.extends.filter((i) => i !== 'plugin:storybook/recommended');
  fs.writeJsonSync('.eslintrc.json', eslintObj, { spaces: 4 });
}

async function removePlaywright() {
  fs.removeSync('.playwright-approved');
  fs.removeSync('.playwright-pending');
  fs.removeSync('playwright');
  fs.removeSync('tests/component');
  fs.removeSync('tests/integration');
  fs.removeSync('./playwright.config.ts');
  fs.removeSync('./playwright-ct.config.ts');
  await removePackages([
    '@playwright/test',
    '@playwright/experimental-ct-react'
  ]);
  await setScript('test');
  await setScript('test:e2e');
  await setScript('test:e2e-open');
  await setScript('e2e-check');
  await setScript('test:component');
  await setScript('test:component-open');
}

async function removeJest() {
  fs.removeSync('tests/unit');
  fs.removeSync('./jest.config.js');
  await removePackages(['jest', 'jest-environment-jsdom']);
  await setScript('test:unit');
}

if (args.includes('storycap') || args.includes('storybook')) {
  await removeStorycap();
}
if (args.includes('storybook')) {
  await removeStorybook();
}
if (args.includes('playwright')) {
  await removePlaywright();
}
if (args.includes('jest')) {
  await removeJest();
}
