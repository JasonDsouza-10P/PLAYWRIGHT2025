exports.CartPage = class CartPage {
    constructor(page) {

        this.page = page
        this.placeorder_button = page.getByRole('link', { name: 'Delete' })
        

    }
    async cart() {
        
        await this.placeorder_button.click()

        
        
    }



    
}

//await page.getByRole('link', { name: 'Delete' }).nth(2).click();