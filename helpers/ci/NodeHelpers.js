// General import
const { stdout } = require('process');
const { join } = require('path');

const { readdirSync, lstatSync } = require('fs-extra');
const { red, green } = require('colorette');

/**
 * Gets all the file paths from the selected directory recursively.
 *
 * @param {string} directory Path to the directory from which to read the files.
 * @returns Array of file paths in the selected directory
 */
module.exports.getFilesRecursively = (directory) => {
  const files = [];

  const filesInDirectory = readdirSync(directory);

  filesInDirectory.forEach((file) => {
    const absolute = join(directory, file);

    if (lstatSync(absolute).isDirectory()) {
      files.push(...this.getFilesRecursively(absolute));
    } else {
      files.push(absolute);
    }
  });

  return files;
};

/**
 * Prints the information about starting the task and its completion to the console.
 *
 * @param {string} message Message to output before starting the process.
 * @param {Function} taskToRun Function to invoke.
 * @returns Value that the function returns
 */
module.exports.logProcess = (message, taskToRun) => {
  try {
    stdout.write(message);

    const valueToReturn = taskToRun();
    stdout.write(green(' DONE ✔\n'));

    return valueToReturn;
  } catch (error) {
    stdout.write(red(' ERROR ✘\n'));

    throw error;
  }
};
