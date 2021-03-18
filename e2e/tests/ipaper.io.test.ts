describe('ipaper.io', () => {
   it('should allow us to sign up for the newsletter', async () => {
       const inputSelector = 'input[name=email]';
       const buttonSelector = 'input[type=submit]';

       await page.goto('https://ipaper.io');
       await page.click('button.coi-banner__accept');
       const inputs = await page.$$(inputSelector);
       await inputs[1].type('test@ipaper.io');
       const buttons = await page.$$(buttonSelector);
       await buttons[1].click();
    });
});
