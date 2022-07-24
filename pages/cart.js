class CartPage {
  constructor(page) {
    this.page = page;
    this.checkout = page.locator('[data-test="checkout"]');
  }
  async clickCheckout() {
    await this.checkout.click();
  }
}
module.exports = { CartPage };
