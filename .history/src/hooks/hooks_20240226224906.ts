import { Before, After} from '@cucumber/cucumber';
import { Page, Browser, BrowserContext } from '@playwright/test' ;
import { invokeBrowser } from '../../Browser/browserManager';
import { HomeDemoGuruPage } from '../page/HomeDemoGuruPage';
const { format } = require('date-fns');
import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

let browser: Browser;
let context: BrowserContext;
let page: Page;
let homeDemoGuruPage: HomeDemoGuruPage; 


//Fecha del dia para guardar los videos
const today = new Date();
const formattedDate = format(today, 'dd-MM-yy');

// Agrega las credenciales HTTP aquí
const httpCredentials = {
  username: '',
  password: '',
};

Before(async () => {
    browser = await invokeBrowser();

    if (process.env.npm_config_VIDEO === 'TRUE') {
    context = await browser.newContext({
      ignoreHTTPSErrors: true,
      recordVideo:{
        dir: `videos/${formattedDate}/`,
        size: { width: 800, height: 600 }
  }})
    }else{
      context = await browser.newContext({
        ignoreHTTPSErrors: true,
    });
}
    page = await context.newPage();
    homeDemoGuruPage = new HomeDemoGuruPage(page, context);
    await context.setHTTPCredentials(httpCredentials);
  });

  After(async () => {
    // Cierra la página actual
    await page.close();
    await browser.close();
  });
  
  // Exporta la variable page al final del archivo
export { page, homeDemoGuruPage };
