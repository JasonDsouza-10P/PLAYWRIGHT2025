exports.OrderPage = class OrderPage{

constructor(page){
    this.page = page
    //this.close_text = page.getByLabel('Place order').getByText('Close')
    this.close_button = page.locator('button[data-dismiss="modal"]')

    
}
async order(){
    await this.close_button.waitFor({state: 'visible', timeout: 5000})
    await this.close_button.click()

}



}