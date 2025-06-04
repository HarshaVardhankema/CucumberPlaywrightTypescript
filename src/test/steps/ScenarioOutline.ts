import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { firefox, Page, Browser } from "@playwright/test";

let browser: Browser;
let page: Page;

setDefaultTimeout(60000); // Set once globally

Given('Navigating to midoc patient page', { timeout: 60000 }, async function () {
  browser = await firefox.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://midoc-patientapp-dev.azurewebsites.net/login');
  await page.waitForLoadState('networkidle'); // ✅ Better wait
});

Then('Entering the username as {string} and password as {string}', async function (username, password) {
  await page.locator('input.chakra-input.css-dhzvz6').fill(username);
  await page.waitForTimeout(1000);
  await page.locator('button.chakra-button.css-12kaf87').click(); // click Continue or Next
  await page.waitForTimeout(2000);
  await page.locator('input.chakra-input.css-1rsaweq').fill(password);
});

When('Clicking on the login button', async function () {
  await page.locator('button.chakra-button.css-12kaf87').click(); // login button
  await page.waitForLoadState('networkidle'); // ✅ better than timeout
});

Then('Verifying the login is successful', async function () {
  const title = await page.title();
  if (title === 'Midoc Patient App') {
    console.log('✅ Login successful');
  } else {
    console.log('❌ Login failed');
  }

  await page.screenshot({ path: 'midocpatient.png' });
});
