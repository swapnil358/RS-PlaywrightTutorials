const { test, expect, request } = require('@playwright/test');
const {APIUtils}  = require('./utils/APIUtils')


const loginPayload = {userEmail: "swap@yopmail.com",userPassword:"Qwerty@12345"}

const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};



 let token;
 let orderId;
 let response;
 test.beforeAll( async()=> 
   {

      const apiContext = await request.newContext();
      const apiUtils = new APIUtils(apiContext,loginPayload);
      response = await apiUtils.createOrder(orderPayLoad);
      
      });



 test.beforeEach( ()=> 
   {

 });
 
 
test('Place the order', async ({ page }) =>
   {

   page.addInitScript(value => {
      window.localStorage.setItem('token', value);
   }, response.token);

   
   await page.goto("https://rahulshettyacademy.com/client");
   const email = "anshika@gmail.com";
   console.log(response.orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (response.orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
 
});
 
 
 