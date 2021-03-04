const { chromium } = require('playwright');
const expect = require('expect-playwright');
let browser;
let page;

describe('our awesome button', () => {
    beforeAll(async () => {
        browser = await chromium.launch();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    it('should count clicks', async () => {
        await page.goto('http://localhost:3000');
        const button = await page.$('#e2e-test');
        if (!button) {
            throw new Error('Button not found - maybe the page failed to load?');
        }
        expect(button.textContent).toBe('Count is: 0');
        button.click();
        expect(button.textContent).toBe('Count is: 1');
        button.click();
        expect(button.textContent).toBe('Count is: 2');
        button.click();
        expect(button.textContent).toBe('Count is: 3');
    });

    afterEach(async () => {
        await page.close();
    });

    afterAll(async () => {
        await browser.close();
    });
});
