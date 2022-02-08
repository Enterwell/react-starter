// General imports
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Node helpers import
const { getFilesRecursively, logProcess } = require('./NodeHelpers');

// Directory paths
const APPROVED_DIR_NAME = '.stories-approved';
const PENDING_DIR_NAME = '.stories-pending';

const APPROVED_STORIES = path.join(__dirname, `../${APPROVED_DIR_NAME}`);
const PENDING_STORIES = path.join(__dirname, `../${PENDING_DIR_NAME}`);

/**
 * Scripts main function.
 *
 * @param {string} approvedStories Path to the approved stories directory
 * @param {string} pendingStories Path to the pending stories directory
 * @param {string} approvedDirName Name of the approved stories directory
 * @param {string} pendingDirName Name of the pending stories directory
 */
const run = (
  approvedStories = APPROVED_STORIES,
  pendingStories = PENDING_STORIES,
  approvedDirName = APPROVED_DIR_NAME,
  pendingDirName = PENDING_DIR_NAME
) => {
  try {
    let numberOfChanges = 0;

    // Get all the approved files.
    const approvedFiles = logProcess('Fetching approved files...', () => getFilesRecursively(approvedStories));

    // Get all the pending files.
    const pendingFiles = logProcess('Fetching pending files...', () => getFilesRecursively(pendingStories));

    // Iterate all the approved files.
    approvedFiles.forEach((approvedFile) => {
      const approvedFileShort = approvedFile.substring(approvedFile.indexOf(approvedDirName) + approvedDirName.length + 1);
      const possiblePending = approvedFile.replace(approvedDirName, pendingDirName);

      // If the approved file is an old one (does not exist in the pending folder)
      // delete it from the approved folder.
      if (!pendingFiles.includes(possiblePending)) {
        logProcess(`\t${chalk.red(`[-] ${approvedFileShort}`)}`, () => fs.unlinkSync(approvedFile));
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
        logProcess(`\t${chalk.green(`[+] ${possibleNewShort}`)}`, () => fs.renameSync(pendingFile, possibleNew));
        numberOfChanges++;
      } else {
        const pendingFileBytes = fs.readFileSync(pendingFile);
        const approvedFileBytes = fs.readFileSync(possibleNew);

        // If the files are not the same, overwrite it.
        if (!pendingFileBytes.equals(approvedFileBytes)) {
          logProcess(`\t${chalk.yellow(`[≠] ${possibleNewShort}`)}`, () => fs.renameSync(pendingFile, possibleNew));
          numberOfChanges++;
        } else {
          console.log(`\t${chalk.white(`[=] ${possibleNewShort}`)}`);
        }
      }
    });

    console.log(`Detected changes: ${numberOfChanges}`);

    if (numberOfChanges) process.exit(1);
  } catch (error) {
    console.error(chalk.red('Error occurred while running the script:'));
    console.error(chalk.red(error));
    process.exit(2);
  }
};

module.exports = { run };
