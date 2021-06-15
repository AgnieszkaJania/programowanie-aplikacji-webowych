import * as Puppeteer from 'puppeteer';

describe('Kolko i krzyzk testy', ()=>{
    beforeAll(async ()=>{

    });
    it('Check if Cross wins', async ()=>{
        const browser = await Puppeteer.launch({headless: false, product:'chrome'});
        const page = await browser.newPage();
        await page.goto(`file:///${__dirname}/dist/index.html`);
    //     page.on("dialog", async (dialog) =>{
    //         await expect(dialog.message()).toContain('cir won !');
    //        // await dialog.accept();
    //         await page.keyboard.press('Enter');
    //        //await browser.close();
    //    });
        await page.type('input', '4', {delay:10});
        await page.click('button');
        await page.click('div#FIELD0_0');
        await page.click('div#FIELD0_1');
        await page.click('div#FIELD1_1');
        await page.click('div#FIELD0_3');
        await page.click('div#FIELD2_2');
        await page.click('div#FIELD0_2');
        await page.click('div#FIELD3_3');
        
        const result = await page.$$eval('div#win', el => el[0].innerHTML);
        await expect(result).toContain('Cross won !');

    });
    it('Check if Circle wins', async ()=>{
        const browser = await Puppeteer.launch({headless: false, product:'chrome'});
        const page = await browser.newPage();
        await page.goto(`file:///${__dirname}/dist/index.html`);
        await page.type('input', '4', {delay:10});
        await page.click('button');
        await page.click('div#FIELD0_1');
        await page.click('div#FIELD0_0');
        await page.click('div#FIELD1_2');
        await page.click('div#FIELD1_1');
        await page.click('div#FIELD1_3');
        await page.click('div#FIELD2_2');
        await page.click('div#FIELD2_1');
        await page.click('div#FIELD3_3');

        const result = await page.$$eval('div#win', el => el[0].innerHTML);
        await expect(result).toContain('Circle won !');
        //await browser.close();

    });
    it('Check if remis', async ()=>{
        const browser = await Puppeteer.launch({headless: false, product:'chrome'});
        const page = await browser.newPage();
        await page.goto(`file:///${__dirname}/dist/index.html`);
        await page.type('input', '3', {delay:10});
        await page.click('button');
        await page.click('div#FIELD0_0');
        await page.click('div#FIELD0_1');
        await page.click('div#FIELD0_2');
        await page.click('div#FIELD2_0');
        await page.click('div#FIELD2_1');
        await page.click('div#FIELD2_2');
        await page.click('div#FIELD1_1');
        await page.click('div#FIELD1_0');
        await page.click('div#FIELD1_2');
        
        const result = await page.$$eval('div#win', el => el[0].innerHTML);
        await expect(result).toContain('Remis !');

    });
    it('Check if wins horizontal', async ()=>{
        const browser = await Puppeteer.launch({headless: false, product:'chrome'});
        const page = await browser.newPage();
        await page.goto(`file:///${__dirname}/dist/index.html`);
        await page.type('input', '3', {delay:10});
        await page.click('button');
        await page.click('div#FIELD0_0');
        await page.click('div#FIELD1_0');
        await page.click('div#FIELD0_1');
        await page.click('div#FIELD1_1');
        await page.click('div#FIELD0_2');
        await page.click('div#FIELD1_2');
        
        const result = await page.$$eval('div#win', el => el[0].innerHTML);
        await expect(result).toContain('Cross won !');

    });
    it('Check if wins vertical', async ()=>{
        const browser = await Puppeteer.launch({headless: false, product:'chrome'});
        const page = await browser.newPage();
        await page.goto(`file:///${__dirname}/dist/index.html`);
        await page.type('input', '3', {delay:10});
        await page.click('button');
        await page.click('div#FIELD0_1');
        await page.click('div#FIELD0_0');
        await page.click('div#FIELD0_2');
        await page.click('div#FIELD1_0');
        await page.click('div#FIELD2_2');
        await page.click('div#FIELD2_0');
        
        const result = await page.$$eval('div#win', el => el[0].innerHTML);
        await expect(result).toContain('Circle won !');

    });
})