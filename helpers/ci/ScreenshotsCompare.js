// General imports
const fs = require('fs-extra');
const chalk = require('chalk');

// Node helpers import
const { getFilesRecursively, logProcess } = require('./NodeHelpers');

/**
 * Scripts main function.
 *
 * @param {string} approvedPath Path to the approved screenshots directory
 * @param {string} pendingPath Path to the pending screenshots directory
 * @param {string} approvedDirName Name of the approved screenshots directory
 * @param {string} pendingDirName Name of the pending screenshots directory
 */
const compare = (approvedPath, pendingPath, approvedDirName, pendingDirName) => {
  try {
    let numberOfChanges = 0;

    // Ensure the approved directory exists.
    fs.ensureDirSync(approvedPath);

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
        logProcess(`\t${chalk.red(`[-] ${approvedFileShort}`)}`, () => fs.removeSync(approvedFile));
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
        logProcess(`\t${chalk.green(`[+] ${possibleNewShort}`)}`, () => fs.moveSync(pendingFile, possibleNew, { overwrite: true }));
        numberOfChanges++;
      } else {
        const pendingFileBytes = fs.readFileSync(pendingFile);
        const approvedFileBytes = fs.readFileSync(possibleNew);

        // If the files are not the same, overwrite it.
        if (!pendingFileBytes.equals(approvedFileBytes)) {
          logProcess(`\t${chalk.yellow(`[≠] ${possibleNewShort}`)}`, () => fs.moveSync(pendingFile, possibleNew, { overwrite: true }));
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

module.exports = { compare };
