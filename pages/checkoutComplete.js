class CheckoutComplete {
  constructor(page) {
    this.page = page;
    this.finish = page.locator('[data-test="finish"]');
  }

  async clickFinish() {
    await this.finish.click();
  }
}
module.exports = { CheckoutComplete };
