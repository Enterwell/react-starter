// General imports
const path = require('path');

// Compare script import
const { compare } = require('./ScreenshotsCompare');

// Directory paths
const APPROVED_DIR_NAME = '.playwright-approved';
const PENDING_DIR_NAME = '.playwright-pending';

const APPROVED_PLAYWRIGHT = path.join(__dirname, `../../${APPROVED_DIR_NAME}`);
const PENDING_PLAYWRIGHT = path.join(__dirname, `../../${PENDING_DIR_NAME}`);

/**
 * Running the script with the Playwright screenshots parameters.
 *
 * @param {string} approvedPlaywright Path to the approved Playwright directory
 * @param {string} pendingPlaywright Path to the pending Playwright directory
 * @param {string} approvedDirName Name of the approved Playwright directory
 * @param {string} pendingDirName Name of the pending Playwright directory
 */
const run = (
  approvedPlaywright = APPROVED_PLAYWRIGHT,
  pendingPlaywright = PENDING_PLAYWRIGHT,
  approvedDirName = APPROVED_DIR_NAME,
  pendingDirName = PENDING_DIR_NAME
) => compare(approvedPlaywright, pendingPlaywright, approvedDirName, pendingDirName);

module.exports = { run };
