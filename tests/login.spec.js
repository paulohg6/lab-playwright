const { test, expect } = require('@playwright/test');

test('Login informando CPF INVALIDO', async ({ page }) => {
  await page.goto('https://pdv.dito.com.br/login');
  await page.fill('[name="code"]', 'paulo_smr1@hotmail.com');
  await page.fill('[name="cpf"]', '32106254');
  await page.keyboard.press("Tab");
  
  await expect((await page.innerText('text=CPF incorreto'))).toEqual('CPF incorreto');

});

test('Login informando Usuario invalido', async ({ page }) => {
  await page.goto('https://pdv.dito.com.br/login');
  await page.fill('[name="code"]', '1');
  await page.fill('[name="cpf"]', '04419036141');
  await page.click('button:has-text("Entrar")');
  await expect((await page.innerText('text=Ops! Credenciais inválidas'))).toEqual('Ops! Credenciais inválidas');
  
});
