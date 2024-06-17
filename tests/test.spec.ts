import { test, expect } from '@playwright/test';

test('Verificar modo escuro', async ({ page }) => {

    await page.goto('http://localhost:3000');


    const initialThemeColor = await page.$eval('header', el => {
        const computedStyle = window.getComputedStyle(el);
        return computedStyle.backgroundColor;
    });



    await page.click('#avatar');
    await page.click('#dark-mode-switch');


    await page.waitForTimeout(100);


    const darkThemeColor = await page.$eval('header', el => {
        const computedStyle = window.getComputedStyle(el);
        return computedStyle.backgroundColor;
    });



    expect(initialThemeColor).not.toBe(darkThemeColor);

});
