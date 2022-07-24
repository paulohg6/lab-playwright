const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login");
const { InventoryPage } = require("../pages/inventory");
const { CartPage } = require("../pages/cart");
const { CheckoutStepOne } = require("../pages/checkoutStepOne");
const { CheckoutStepTwo } = require("../pages/checkoutStepTwo");
const Data = require("../data/env.json");

test.describe.parallel("Login Page Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(Data.baseURL);
  });

  test("test  @smoke", async ({ page }) => {
    //Login
    const loginPage = new LoginPage(page);
    await loginPage.fillUser("standard_user");
    await loginPage.fillPassword("secret_sauce");
    await loginPage.clickLogin();
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.clickAddBackpack();
    await inventoryPage.clickCart();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    const checkoutStepOne = new CheckoutStepOne(page);
    await checkoutStepOne.fillFirstName("Paulo Henrique");
    await checkoutStepOne.fillLastName("Gonçalves");
    await checkoutStepOne.fillPostalCode("74565060");
    await checkoutStepOne.clickContinue();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    const checkoutStepTwo = new CheckoutStepTwo(page);
    await checkoutStepTwo.clickFinish();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await page.click("text=THANK YOU FOR YOUR ORDER");
    await page.click("text=Checkout: Complete!");
    await page.click('[data-test="back-to-products"]');
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("test 1 @fail", async ({ page }) => {
    //Login
    const loginPage = new LoginPage(page);
    await loginPage.genericLogin("problem_user", "secret_sauce");
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.clickAddBackpack();
    await inventoryPage.clickCart();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    const checkoutStepOne = new CheckoutStepOne(page);
    await checkoutStepOne.genericCheckout(
      "Paulo Henrique",
      "Gonçalves",
      "74565060"
    );
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    const checkoutStepTwo = new CheckoutStepTwo(page);
    await checkoutStepTwo.clickFinish();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await page.click("text=THANK YOU FOR YOUR ORDER");
    await page.click("text=Checkout: Complete!");
    await page.click('[data-test="back-to-products"]');
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
});
