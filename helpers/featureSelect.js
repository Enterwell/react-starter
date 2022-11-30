const rimraf = require('rimraf');
const PackageJson = require('@npmcli/package-json');

const args = process.argv;
console.log({ args });

function deleteFileOrDirectory(path) {
  try {
    rimraf.sync(path);
    //fs.unlinkSync(path);
  } catch (err) {
    console.error(err);
  }
}

async function removePackage(packageName) {
  const pkgJson = await PackageJson.load('.');
  pkgJson.update({
    dependencies: {
      ...pkgJson.dependencies,
      [packageName]: undefined
    },
    devDependencies: {
      [packageName]: undefined
    }
  });
  pkgJson.save();
}

function removeStorycap() {
  deleteFileOrDirectory('.stories-approved');
  deleteFileOrDirectory('.stories-pending');
  deleteFileOrDirectory('.storycap-pending');
  removePackage('storycap');
}

function removeStorybook() {
  deleteFileOrDirectory('.storybook');
}

if (args.includes('storycap')) removeStorycap();
if (args.includes('storybook')) removeStorybook();
