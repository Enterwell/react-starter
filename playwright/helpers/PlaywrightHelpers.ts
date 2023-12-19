import path from 'path';

import { Page, PageScreenshotOptions } from '@playwright/test';

// Directory where the pending screenshots are stored
const PLAYWRIGHT_PENDING_DIR = '.playwright-pending';

/**
 * Screenshot function that takes additional arguments and outputs the result in a
 * '.playwright-pending' directory.
 *
 * @param page Playwright's page instance
 * @param browserName Name of the browser that runs the test
 * @param executingFilePath '__filename' of the caller
 * @param screenshotName Desired name of the screenshot
 * that will be appended the browser's name
 * @param additionalOptions Additional options to pass to the screenshot function
 */
export async function screenshot(
  page: Page,
  browserName: string,
  executingFilePath: string,
  screenshotName: string,
  additionalOptions: PageScreenshotOptions = {}
) {
  const directoryName = path.basename(executingFilePath).replace(/\..+$/, '');

  await page.screenshot({
    path: `${PLAYWRIGHT_PENDING_DIR}/${directoryName}/${screenshotName}-${browserName}.png`,
    ...additionalOptions
  });
}
