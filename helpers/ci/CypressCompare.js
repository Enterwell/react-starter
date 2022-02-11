// General imports
const path = require('path');

// Compare script import
const { compare } = require('./ScreenshotsCompare');

// Directory paths
const APPROVED_DIR_NAME = '.cypress-approved';
const PENDING_DIR_NAME = '.cypress-pending';

const APPROVED_CYPRESS = path.join(__dirname, `../../${APPROVED_DIR_NAME}`);
const PENDING_CYPRESS = path.join(__dirname, `../../${PENDING_DIR_NAME}`);

/**
 * Running the script with the cypress screenshots parameters.
 *
 * @param {string} approvedCypress Path to the approved cypress directory
 * @param {string} pendingCypress Path to the pending cypress directory
 * @param {string} approvedDirName Name of the approved cypress directory
 * @param {string} pendingDirName Name of the pending cypress directory
 */
const run = (
  approvedCypress = APPROVED_CYPRESS,
  pendingCypress = PENDING_CYPRESS,
  approvedDirName = APPROVED_DIR_NAME,
  pendingDirName = PENDING_DIR_NAME
) => compare(approvedCypress, pendingCypress, approvedDirName, pendingDirName);

module.exports = { run };
