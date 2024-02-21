import { Given, When, Then} from '@cucumber/cucumber';
import { Page} from '@playwright/test' ;
import { Context } from 'vm';
import { pageFix } from '../../hooks/pageFix';
//import { assert } from 'assert';
//const assert = require('assert');

let page: Page;

Given('User navigates to the application', async function () {
    await pageFix.page.goto('https://demo.guru99.com/test/newtours/');
});

Given('User enter the username as {string}', async function (string) {
    await pageFix.page.locator('input[name="userName"]').fill('admin');
});

Given('User enter the password as {string}', async function (string) {
    await pageFix.page.locator('input[name="password"]').fill('1234');
    //captura de pantalla
    let screenshot = await pageFixpage.screenshot();
    this.attach(screenshot, "image/png");
});

When('User click on the login button', async function () {  
    await pageFix.page.getByRole('button', { name: 'Submit' }).click();
});

Then('Login should be success', async function () {
 // Espera a que la URL actual sea la esperada
 await pageFix.page.waitForURL('https://demo.guru99.com/test/newtours/login_sucess.php', { timeout: 5000 });

 // Obtiene la URL actual
 const currentUrl = pageFix.page.url();

 // Valida que la URL sea la esperada
 //assert.strictEqual(currentUrl, 'https://demo.guru99.com/test/newtours/login_sucess.php');
 console.log("Fin");
 let screenshot = await pageFix.page.screenshot();
 this.attach(screenshot, "image/png");
});