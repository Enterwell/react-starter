// General imports
const path = require('path');

// Compare script import
const { compare } = require('./ScreenshotsCompare');

// Directory paths
const APPROVED_DIR_NAME = '.stories-approved';
const PENDING_DIR_NAME = '.stories-pending';

const APPROVED_STORIES = path.join(__dirname, `../../${APPROVED_DIR_NAME}`);
const PENDING_STORIES = path.join(__dirname, `../../${PENDING_DIR_NAME}`);

/**
 * Running the script with the storybook stories parameters.
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
) => compare(approvedStories, pendingStories, approvedDirName, pendingDirName);

module.exports = { run };
