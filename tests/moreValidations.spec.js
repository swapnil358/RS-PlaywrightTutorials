
const {test, expect} = require("@playwright/test")

//frame //iframe
test("Pop up validations", async ({page})=>
    {
        await page.goto("https://www.rahulshettyacademy.com/AutomationPractice")
        // await page.goto("https://www.google.com")
        // await page.goBack();
        // await page.goForward();
    
        await expect(page.locator("#displayed-text")).toBeVisible();
        await page.locator("#hide-textbox").click();
        await expect(page.locator("#displayed-text")).toBeHidden();

        //await page.pause();
        //page.on('dialog', dialog => dialog.accept())
        await page.locator("#alertbtn").click()
        await page.locator("#mousehover").hover()
        console.log(await page.locator(".mouse-hover-content").textContent());

        // await page.pause();

        const framesPage = page.frameLocator("#course-iframe");
        await framesPage.locator("li a[href*='lifetime-access']:visible").click();
        await framesPage.locator(".text h2").textContent();
        const textCheck = await framesPage.locator(".text h2").textContent();
        console.log(textCheck.split(" ")[1])

})


test("Screenshot test", async ({page})=>
    {
        await page.goto("https://www.rahulshettyacademy.com/AutomationPractice")
        // await page.goto("https://www.google.com")
        // await page.goBack();
        // await page.goForward();
    
        await expect(page.locator("#displayed-text")).toBeVisible();
        await expect(page.locator("#displayed-text").screenshot({path:'partialScreenshot.png'}));
        await page.locator("#hide-textbox").click();
        await page.screenshot({path: 'screenshot.png'})
        await expect(page.locator("#displayed-text")).toBeHidden();
        
})

test.only("Visual Testing", async ({page})=>
    {
       await page.goto("https://opensource-demo.orangehrmlive.com/")
       expect(await page.screenshot()).toMatchSnapshot('landing.png')

})