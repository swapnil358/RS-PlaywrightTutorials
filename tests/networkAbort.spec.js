const { test,expect } = require('@playwright/test');
const { request } = require('http');
 
 
test('@QW Security test request intercept', async ({ page }) => {
    //login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();

    //await page.route('**/*.{jpg,png,jpeg}',route=> route.abort);  /this will block images 
    

    //this is print all request calls and its response
    page.on('request', request=>console.log(request.url()));
    page.on('response',response=>console.log(response.url(),response.status()))

    


    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
 
    await page.locator("button[routerlink*='myorders']").click();
  
 

})