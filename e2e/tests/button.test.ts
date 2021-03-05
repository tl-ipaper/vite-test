describe('our awesome button', () => {
    it('should count clicks', async () => {
        await page.goto('http://localhost:3000');

        const buttonSelector = '#e2e-test';
        expect(await page.textContent(buttonSelector)).toBe('Count is: 0');
        await page.click(buttonSelector);
        expect(await page.textContent(buttonSelector)).toBe('Count is: 1');
        await page.click(buttonSelector);
        expect(await page.textContent(buttonSelector)).toBe('Count is: 2');
        await page.click(buttonSelector);
        expect(await page.textContent(buttonSelector)).toBe('Count is: 3');

        await page.close();
    });
});
