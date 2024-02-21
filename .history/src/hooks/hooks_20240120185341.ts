import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test' ;
import { Context } from 'vm';

let browser: Browser;
let context: Context;
let page: Page;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
  });
  
  AfterAll(async () => {
    // Cierra el navegador
    await browser.close();
  });