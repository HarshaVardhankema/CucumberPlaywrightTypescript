//"src/test/features/flipkart.feature"   --- cucumber json

import { Given, When, Then,  } from "@cucumber/cucumber"; 
import { firefox, Page, Browser } from "@playwright/test";
let browser: Browser;
let page: Page;

Given('Navigate Flipkart homepage', {timeout:30000}, async function () {
  browser = await firefox.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://www.flipkart.com/');
  await page.waitForTimeout(5000);
});

Then('Click on search bar', async function () {
  await page.locator('input.Pke_EE').fill('samsungs25ultra5g');
  await page.locator('input.Pke_EE').press('Enter');
  await page.waitForTimeout(3000);
});


Then('Click on first product', async function () {

await page.locator('div.KzDlHZ').first().click();

});

Then('Click on add to cart', async function () {

    await page.locator('button.QqFHMw.vslbG\+.In9uk2').click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'flipkart_product.png' });
});