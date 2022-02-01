// General imports
const fs = require('fs');
const path = require('path');
const { stdout } = require('process');

// Directory paths
const APPROVED_DIR_NAME = '.storycap-approved';
const PENDING_DIR_NAME = '.storycap-pending';

const APPROVED_STORYCAPS = path.join(__dirname, `../${APPROVED_DIR_NAME}`);
const PENDING_STORYCAPS = path.join(__dirname, `../${PENDING_DIR_NAME}`);

/**
 * Helper method to get all the file paths from the selected directory recursively.
 *
 * @param {string} directory Path to the directory from which to read the files
 * @returns Array of file paths in the selected directory
 */
const getFilesRecursively = (directory) => {
  const files = [];

  const filesInDirectory = fs.readdirSync(directory);

  filesInDirectory.forEach((file) => {
    const absolute = path.join(directory, file);

    if (fs.lstatSync(absolute).isDirectory()) {
      files.push(...getFilesRecursively(absolute));
    } else {
      files.push(absolute);
    }
  });

  return files;
};

/**
 * Helper method to print the information about starting the task and its completion
 * to the console.
 *
 * @param {string} message Message to output before starting the process.
 * @param {Function} taskToRun Function to invoke.
 * @returns Value that the function returns
 */
const logProcess = (message, taskToRun) => {
  try {
    stdout.write(message);
    const valueToReturn = taskToRun();
    stdout.write(' DONE ✔\n');

    return valueToReturn;
  } catch (error) {
    stdout.write(' ERROR X\n');

    throw error;
  }
};

/**
 * Script's starting point.
 */
try {
  // Get all the approved files.
  const approvedFiles = logProcess('Fetching approved files...', () => getFilesRecursively(APPROVED_STORYCAPS));

  // Get all the pending files.
  const pendingFiles = logProcess('Fetching pending files...', () => getFilesRecursively(PENDING_STORYCAPS));

  console.log();

  console.log('Cleaning the approved files:');
  // Iterate all the approved files.
  approvedFiles.forEach((approvedFile) => {
    console.log(`\t${approvedFile}`);

    const possiblePending = approvedFile.replace(APPROVED_DIR_NAME, PENDING_DIR_NAME);

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

    const possibleNew = pendingFile.replace(PENDING_DIR_NAME, APPROVED_DIR_NAME);

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
  console.error('Error occurred while while running the script:');
  console.error(error);
}
