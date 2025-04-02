exports.LogoutPage = class LogoutPage{
    constructor(page){
        this.page = page
        this.logout_link = page.getByRole('link', { name: 'Log out' })
    }

    async logout(){

        await this.logout_link.click()
    }


}