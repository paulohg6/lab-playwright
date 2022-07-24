class CheckoutStepOne {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continue = page.locator('[data-test="continue"]');
  }

  async fillFirstName(fName) {
    await this.firstName.fill(fName);
  }
  async fillLastName(lName) {
    await this.lastName.fill(lName);
  }
  async fillPostalCode(code) {
    await this.postalCode.fill(code);
  }
  async clickContinue() {
    await this.continue.click();
  }
  async genericCheckout(fName, lName, code) {
    await this.fillFirstName(fName);
    await this.fillLastName(lName);
    await this.fillPostalCode(code);
    await this.clickContinue();
  }
}
module.exports = { CheckoutStepOne };
