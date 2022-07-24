class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addBackpack = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cart = page.locator("#shopping_cart_container a");
  }
  async clickAddBackpack() {
    await this.addBackpack.click();
  }
  async clickCart() {
    await this.cart.click();
  }
}

module.exports = { InventoryPage };
