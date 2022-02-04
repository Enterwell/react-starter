// General imports
const fs = require('fs');
const path = require('path');

// Node helpers import
const { getFilesRecursively, logProcess } = require('./NodeHelpers');

// Directory paths
const APPROVED_DIR_NAME = '.storycap-approved';
const PENDING_DIR_NAME = '.storycap-pending';

const APPROVED_STORYCAPS = path.join(__dirname, `../${APPROVED_DIR_NAME}`);
const PENDING_STORYCAPS = path.join(__dirname, `../${PENDING_DIR_NAME}`);

/**
 * Scripts main function.
 *
 * @param {string} approvedStorycaps Path to the approved storycaps directory
 * @param {string} pendingStorycaps Path to the pending storycaps directory
 * @param {string} approvedDirName Name of the approved storycaps directory
 * @param {string} pendingDirName Name of the pending storycaps directory
 */
const run = (
  approvedStorycaps = APPROVED_STORYCAPS,
  pendingStorycaps = PENDING_STORYCAPS,
  approvedDirName = APPROVED_DIR_NAME,
  pendingDirName = PENDING_DIR_NAME
) => {
  try {
    // Get all the approved files.
    const approvedFiles = logProcess('Fetching approved files...', () => getFilesRecursively(approvedStorycaps));

    // Get all the pending files.
    const pendingFiles = logProcess('Fetching pending files...', () => getFilesRecursively(pendingStorycaps));

    console.log();

    console.log('Cleaning the approved files:');
    // Iterate all the approved files.
    approvedFiles.forEach((approvedFile) => {
      console.log(`\t${approvedFile}`);

      const possiblePending = approvedFile.replace(approvedDirName, pendingDirName);

      // If the approved file is an old one (does not exist in the pending folder)
      // delete it from the approved folder.
      if (!pendingFiles.includes(possiblePending)) {
        logProcess('\t\tDeleting the file because it does not exist in the pendings...', () => fs.unlinkSync(approvedFile));
      } else {
        console.log('\t\tFile still OK ✔');
      }
    });

    console.log();

    console.log('Checking the pending files:');
    // Iterate all the files that are pending for approval.
    pendingFiles.forEach((pendingFile) => {
      console.log(`\t${pendingFile}`);

      const possibleNew = pendingFile.replace(pendingDirName, approvedDirName);

      // If the pending file is a new one (does not exist in the approved folder)
      // move it to the approved folder.
      if (!approvedFiles.includes(possibleNew)) {
        logProcess('\t\tApproving the file because it does not exist in the approved...', () => fs.renameSync(pendingFile, possibleNew));
      } else {
        console.log('\t\tFile already exists in the approved folder. Checking if they are the same...');

        const pendingFileBytes = fs.readFileSync(pendingFile);
        const approvedFileBytes = fs.readFileSync(possibleNew);

        // If the files are not the same, overwrite it.
        if (!pendingFileBytes.equals(approvedFileBytes)) {
          console.log('\t\tFiles are not the same X');
          logProcess('\t\tOverwriting the approved one...', () => fs.renameSync(pendingFile, possibleNew));
        } else {
          console.log('\t\tFiles are the same ✔');
        }
      }
    });
  } catch (error) {
    console.error('Error occurred while running the script:');
    console.error(error);
  }
};

module.exports = { run };
