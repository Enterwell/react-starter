// General imports
const { basename } = require('path');

const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');
const { ensureDirSync, readFileSync, removeSync, moveSync } = require('fs-extra');
const { red, green, yellow, white } = require('colorette');

// Node helpers import
const { getFilesRecursively, logProcess } = require('./NodeHelpers');

/**
 * Scripts main function.
 *
 * @param {string} approvedPath Path to the approved screenshots directory
 * @param {string} pendingPath Path to the pending screenshots directory
 */
const compare = (approvedPath, pendingPath) => {
  try {
    const approvedDirName = basename(approvedPath);
    const pendingDirName = basename(pendingPath);

    let numberOfChanges = 0;

    // Ensure the approved directory exists.
    ensureDirSync(approvedPath);

    // Get all the approved files.
    const approvedFiles = logProcess('Fetching approved files...', () => getFilesRecursively(approvedPath));

    // Get all the pending files.
    const pendingFiles = logProcess('Fetching pending files...', () => getFilesRecursively(pendingPath));

    // Iterate all the approved files.
    approvedFiles.forEach((approvedFile) => {
      const approvedFileShort = approvedFile.substring(approvedFile.indexOf(approvedDirName) + approvedDirName.length + 1);
      const possiblePending = approvedFile.replace(approvedDirName, pendingDirName);

      // If the approved file is an old one (does not exist in the pending folder)
      // delete it from the approved folder.
      if (!pendingFiles.includes(possiblePending)) {
        logProcess(`\t${red(`[-] ${approvedFileShort}`)}`, () => removeSync(approvedFile));
        numberOfChanges++;
      }
    });

    // Iterate all the files that are pending for approval.
    pendingFiles.forEach((pendingFile) => {
      const possibleNew = pendingFile.replace(pendingDirName, approvedDirName);
      const possibleNewShort = possibleNew.substring(possibleNew.indexOf(approvedDirName) + approvedDirName.length + 1);

      // If the pending file is a new one (does not exist in the approved folder)
      // move it to the approved folder.
      if (!approvedFiles.includes(possibleNew)) {
        logProcess(`\t${green(`[+] ${possibleNewShort}`)}`, () => moveSync(pendingFile, possibleNew, { overwrite: true }));
        numberOfChanges++;
      } else {
        const pendingImg = PNG.sync.read(readFileSync(pendingFile));
        const approvedImg = PNG.sync.read(readFileSync(possibleNew));
        const { width, height } = pendingImg;

        const numDiffPixels = pixelmatch(pendingImg.data, approvedImg.data, null, width, height);

        // If the images are not the same, overwrite it.
        if (numDiffPixels > 0) {
          logProcess(`\t${yellow(`[≠] ${possibleNewShort}`)}`, () => moveSync(pendingFile, possibleNew, { overwrite: true }));
          numberOfChanges++;
        } else {
          console.log(`\t${white(`[=] ${possibleNewShort}`)}`);
        }
      }
    });

    console.log(`Detected changes: ${numberOfChanges}`);
  } catch (error) {
    console.error(red('Error occurred while running the script:'));
    console.error(red(error));
    process.exit(1);
  }
};

/**
 * Compare's extension for comparing Playwright's screenshots with the convention-based directories.
 */
const comparePlaywright = () => compare('./.playwright-approved', './.playwright-pending');

/**
 * Compare's extension for comparing Storybook's screenshots with the convention-based directories.
 */
const compareStorybook = () => compare('./.stories-approved', './.stories-pending');

module.exports = { comparePlaywright, compareStorybook };
