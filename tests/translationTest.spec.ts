import { test, expect } from '@playwright/test';


test('Translation Test', async ({ page }) => {
    await page.goto('http://localhost:3000');


    const initialTextElement = await page.getByRole('heading', { name: 'Vendas Hoje' });
    const initialText = await initialTextElement.textContent();
    expect(initialText).toBe('Vendas Hoje');

    await page.click('#language-selector');

    await page.waitForSelector('li[data-value="en"]', { state: 'visible', timeout: 5000 })
    await page.click('li[data-value="en"]');

    const englishTextElement = await page.getByRole('heading', { name: 'Sales Today' });
    const englishText = await englishTextElement.textContent();
    expect(englishText).toBe('Sales Today');


    await page.click('#language-selector');


    await page.waitForSelector('li[data-value="es"]', { state: 'visible' });
    await page.click('li[data-value="es"]');

    const spanishTextElement = await page.getByRole('heading', { name: 'Ventas Hoy' });
    const spanishText = await spanishTextElement.textContent();
    expect(spanishText).toBe('Ventas Hoy');
})
