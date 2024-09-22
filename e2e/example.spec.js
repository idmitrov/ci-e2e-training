// @ts-check
const { test, expect } = require('@playwright/test');

test('should manually type date into the Basic date picker', async ({page}) => {
  // Headless workaround for missing pointer
  // await page.evaluate(() => {
  //   // Ensure pointer events are enabled
  //   document.documentElement.style.pointerEvents = 'auto';
  // });
  
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
});