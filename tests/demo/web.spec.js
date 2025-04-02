import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { ProductPage } from '../../pages/prod';
import { CartPage } from '../../pages/cart';
// import { OrderPage } from '../../pages/order';
import { LogoutPage } from '../../pages/logout';

test('test', async ({ page }) => {

  const Login = new LoginPage(page)
  const Prod = new ProductPage(page)
  const Cart = new CartPage(page)
  // const Order = new OrderPage(page)
  const Logout = new LogoutPage(page)



  await Login.gotoLoginPage()
  //await page.pause()
  await Login.login('Jdsz', '10@Pearls')
  await Prod.prod()
  //await page.pause()
  await Cart.cart()
  // await Order.order()
  await Logout.logout()

});