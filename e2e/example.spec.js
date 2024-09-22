// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs'); // Required for file system operations

test('should manually type date into the Basic date picker and take screenshot', async ({ page }) => {
  // Ensure the screenshots folder exists
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  // Go to the MUI Date Picker page
  await page.goto('https://v6.mui.com/x/react-date-pickers/date-picker/');

  // Locate the input field specifically for the Basic date picker using the placeholder
  const dateInput = page.locator('input[placeholder="MM/DD/YYYY"]').first();

  // Wait for the input field to be visible
  await expect(dateInput).toBeVisible();

  // Clear the input field and type a new date
  await dateInput.fill('09/15/2024');

  // Validate the date change
  await expect(dateInput).toHaveValue('09/15/2024');

  // Take a screenshot after entering the date and save it
  await page.screenshot({ path: 'screenshots/datepicker-screenshot.png' });
});
