import test, { expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  // Faz Login
  await page.goto('http://localhost:3000/');

  await page.fill('input[name="email"]', 'desafioblue@blue.com');
  await page.fill('input[type="password"]', 'desafioblue');
  await page.click('button[type="submit"]');

  // Espera pela resposta e pela navegação para o dashboard
  await new Promise(resolve => setTimeout(resolve,3000));
  
  // Verifica se a URL atual é a esperada
  await expect(page).toHaveURL("http://localhost:3000/dashboard");
});
