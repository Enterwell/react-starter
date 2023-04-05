import path from 'path';

// Directory where the pending screenshots are stored
const PLAYWRIGHT_PENDING_DIR = '.playwright-pending';

/**
 * Screenshot function that takes additional arguments and outputs the result in a
 * '.playwright-pending' directory.
 *
 * @param {Page} page Playwright's page instance
 * @param {string} browserName Name of the browser that runs the test
 * @param {string} executingFilePath '__filename' of the caller
 * @param {string} screenshotName Desired name of the screenshot
 * that will be appended the browser's name
 */
export async function screenshot(
  page,
  browserName,
  executingFilePath,
  screenshotName
) {
  const directoryName = path.basename(executingFilePath).replace(/\..+$/, '');

  await page.screenshot({ path: `${PLAYWRIGHT_PENDING_DIR}/${directoryName}/${screenshotName}-${browserName}.png`});
}
