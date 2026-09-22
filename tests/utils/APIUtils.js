const { test, expect, request } = require('@playwright/test');

class APIUtils {

    constructor(apiContext, loginPayload) {

        this.apiContext = apiContext
        this.loginPayload = loginPayload

    }


    async getToken() {
        const loginRepsonse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayload
            })
        expect(loginRepsonse.ok()).toBeTruthy();
        const loginResponseJson = await loginRepsonse.json();
        //console.log("loginResponseJson: "+JSON.stringify(loginResponseJson));
        const token = loginResponseJson.token;
        console.log(token)
        return token;
    }

    async createOrder(orderPayload) {
        let response = {};
        response.token = await this.getToken()
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,
                headers: {
                    'Authorization': response.token,
                    'Content-type': 'application/json'
                },

            })

        const orderResponseJson = await orderResponse.json();
        console.log("Order Response:==> " + JSON.stringify(orderResponseJson.json));
        const orderId = await orderResponseJson.orders[0];
        response.orderId = orderId;
        return response;
    }
}
module.exports = { APIUtils };