exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.login_link = page.getByRole('link', { name: 'Log in' })
        this.username_textbox = page.locator('#loginusername')
        this.password_textbox = page.locator('#loginpassword')//.click();
        this.login_button = page.getByRole('button', { name: 'Log in' })
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }


    async login(username, password) {
        await this.login_link.click()
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }


}