import { Given, When, Then,BeforeAll, AfterAll} from '@cucumber/cucumber';
import { chromium,firefox,webkit,  Page, Browser } from '@playwright/test' ;
import { Context } from 'vm';
import { invokeBrowser } from '../../../Browser/browserManager';


let page: Page;
let browser: Browser;
let context: Context;

BeforeAll(async () => {
    browser = browser = await invokeBrowser();
    context = await browser.newContext();
    page = await context.newPage();
  });
  
  AfterAll(async () => {
    await page.close();
    // Cierra el navegador
    await browser.close();
  });

Given('User navigates to the application', {timeout:10000}, async function () {
    await page.goto('https://demo.guru99.com/test/newtours/');
});

Given('User enter the username as {string}', async function (string) {
    await page.locator('input[name="userName"]').fill('admin');
});

Given('User enter the password as {string}', async function (string) {
    await page.locator('input[name="password"]').fill('1234');
    //captura de pantalla
    let screenshot = await page.screenshot();
    this.attach(screenshot, "image/png");
});

When('User click on the login button', async function () {  
    await page.getByRole('button', { name: 'Submit' }).click();
});

Then('Login should be success', async function () {
 // Espera a que la URL actual sea la esperada
 await page.waitForURL('https://demo.guru99.com/test/newtours/login_sucess.php', { timeout: 5000 });

 // Obtiene la URL actual
 const currentUrl = page.url();

 // Valida que la URL sea la esperada
 //assert.strictEqual(currentUrl, 'https://demo.guru99.com/test/newtours/login_sucess.php');
 console.log("Fin");
 let screenshot = await page.screenshot();
 this.attach(screenshot, "image/png");
});