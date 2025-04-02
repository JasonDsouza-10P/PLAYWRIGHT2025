exports.ProductPage = class ProjectPage{

    constructor(page) {

        this.page = page
        this.product_link = page.getByRole('link', { name: 'Phones' })
        this.productone_link = page.getByRole('link', { name: 'Iphone 6 32gb' })
        this.addtocart1_link = page.getByRole('link', { name: 'Add to cart' })
        this.cart_link = page.getByRole('link', { name: 'Cart', exact: true })
    }


    async prod(){
        await this.product_link.click()
        await this.productone_link.click()
        await this.addtocart1_link.click()
        await this.cart_link.click()
    }




}


    

