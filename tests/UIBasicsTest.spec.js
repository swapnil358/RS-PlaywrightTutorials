const {test, expect} = require('@playwright/test')


test('Browser context playwright test', async ({ browser }) => 
    {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title());
})


test('Page playwright test', async ({ page }) => 
    {
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle("Google");
})