const { test, expect } = require('@playwright/test');
const LoginPage = require('./pageobjects/LoginPage');

test('@Web Client App login', async ({ page }) => {

    const email = "anshika@gmail.com";
    const password = "Iamking@000";

    const loginPage = new LoginPage(page);

    await loginPage.goTo("https://rahulshettyacademy.com/client");
    await loginPage.validLogin(email, password);
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
});