import { Given, When, Then} from '@cucumber/cucumber';
import { Page} from '@playwright/test' ;
//import { pageFix } from '../../hooks/pageFix';

let page: Page;

Given('User navigates to the application', {timeout:10000}, async function (page) {
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