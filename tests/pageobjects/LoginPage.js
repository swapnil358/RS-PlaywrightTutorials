class LoginPage {

    constructor(page) {

        this.page = page;

        this.userName = page.locator("#userEmail");
        this.passWord = page.locator("#userPassword");
        this.loginBtn = page.locator("[value='Login']");
    }

    async goTo(url) {

        await this.page.goto(url);
    }

    async validLogin(email, password) {

        await this.userName.fill(email);
        await this.passWord.fill(password);
        await this.loginBtn.click();
    }
}

module.exports = LoginPage;