import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test' ;
import { Context } from 'vm';
//import { pageFix } from './pageFix';

let browser: Browser;
let page: Page;
let context: Context;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
     page = await context.newPage();
    //pageFix.page = page;

  });
  
  AfterAll(async () => {
    //await pageFix.page.close();
    // Cierra el navegador
    await browser.close();
  });