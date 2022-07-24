class LoginPage {
  constructor(page) {
    this.page = page;
    this.user = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.btnLogin = page.locator('[data-test="login-button"]');
  }

  async fillUser(user) {
    await this.user.fill(user);
  }

  async fillPassword(password) {
    await this.password.fill(password);
  }

  async clickLogin() {
    await this.btnLogin.click();
  }

  async genericLogin(user, password) {
    await this.fillUser(user);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
module.exports = { LoginPage };
