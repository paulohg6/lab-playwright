const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://front.serverest.dev/');
  await page.fill('[id="email"]', 'paulo_smr1@hotmail.com')
  await page.fill('[id="password"]', '32106254')
  await page.click('[data-testid="entrar"]')
  await expect((await page.innerText('[data-testid="logout"]'))).toEqual('Logout')


});