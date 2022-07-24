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
  test("test login  @smoke", async ({ page }) => {
    console.log();

    const loginPage = new LoginPage(page);
    await loginPage.genericLogin("standard_user", "secret_sauce");
    await expect(page.locator(".title")).toHaveText("Products");
  });
  test("test login problem user  @fail", async ({ page }) => {
    //Login
    const loginPage = new LoginPage(page);
    await loginPage.genericLogin("problem_user", "secret_sauce");
    await expect(page.locator(".title")).toHaveText("Products");
  });

  test("test login problem user 1  @fail", async ({ page }) => {
    //Login
    const loginPage = new LoginPage(page);
    await loginPage.genericLogin("locked_out_user", "secret_sauce");
    await expect(page.locator(".title")).toHaveText("Products");
  });
});
