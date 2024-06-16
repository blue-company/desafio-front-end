import test, { expect } from '@playwright/test';

test('button Card', async ({ page }) => {
  // Faz Login
  await page.goto('http://localhost:3000/');

  await page.fill('input[name="email"]', 'desafioblue@blue.com');
  await page.fill('input[type="password"]', 'desafioblue');
  await page.click('button[type="submit"]');

  // Espere pela resposta e pela navegação para o dashboard
  await page.waitForResponse(response => response.url().includes('/login') && response.status() === 200);
  
  // Verifique se a URL atual é a esperada
  await expect(page).toHaveURL("http://localhost:3000/dashboard");
});
