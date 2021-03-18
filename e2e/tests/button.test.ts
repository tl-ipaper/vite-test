describe('our awesome button', () => {
    it('should count clicks', async () => {
        await page.goto('http://localhost:3000');

        const buttonSelector = '#e2e-test';
        expect(await page.textContent(buttonSelector)).toBe('Reactive counter: 0');
        await page.click(buttonSelector);
        expect(await page.textContent(buttonSelector)).toBe('Reactive counter: 1');
        await page.click(buttonSelector);
        expect(await page.textContent(buttonSelector)).toBe('Reactive counter: 2');
        await page.click(buttonSelector);
        expect(await page.textContent(buttonSelector)).toBe('Reactive counter: 3');

        await page.close();
    });
});
