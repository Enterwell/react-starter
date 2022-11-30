import rimraf from 'rimraf';
import PackageJson from '@npmcli/package-json';

const args = process.argv;
console.log({ args });

function deleteFileOrDirectory(path) {
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

async function removeStorycap() {
  deleteFileOrDirectory('.stories-approved');
  deleteFileOrDirectory('.stories-pending');
  deleteFileOrDirectory('.storycap-pending');

  await removePackage('storycap');
  await removeScript('stories-check');
}

async function removeStorybook() {
  deleteFileOrDirectory('.storybook');
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

  let regex = /[.]txt$/;
  const stories = fs.readdirSync(path)
    .filter(f => regex.test(f))
    .map(f => fs.unlinkSync(path + f));
    console.log({stories});
}

if (args.includes('storycap') || args.includes('storybook')) {
  await removeStorycap();
}
if (args.includes('storybook')) {
  await removeStorybook();
}
