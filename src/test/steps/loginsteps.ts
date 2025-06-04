// "test:login": "cucumber-js src/test/features/login.feature" --package json
//,--- cucumber json
// "src/test/features/**/*.feature", ----cucumber json

import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { firefox, Page, Browser } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('I am on the login page', {timeout:30000}, async function () {
  browser = await firefox.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://midoc-provider-dev.azurewebsites.net/login');
  await page.waitForTimeout(5000);
});

When('I enter my username and password', async function () {
  await page.locator('input.chakra-input.css-rlygj7').first().fill('viggu@gmail.com');
  await page.waitForTimeout(1000);
  await page.locator('input.chakra-input.css-efg1n9').first().fill('midoc123');
  await page.waitForTimeout(3000);
});

Then('I should be redirected to the dashboard', { timeout: 20000 }, async function () {
  await page.locator('xpath=//button[text()="Continue"]').nth(0).click();
  await page.waitForTimeout(9000);

  await page.locator('xpath=//p[text()="Conduiro Jaggi"]').nth(1).click();
  await page.waitForTimeout(5000);

  await page.locator('button.chakra-button.css-dn6flb').click();
  await page.waitForTimeout(5000);

 

  // Optional: Close browser
  // await browser.close();
});
