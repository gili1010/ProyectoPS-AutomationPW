import { Before, After} from '@cucumber/cucumber';
import { Page, Browser, BrowserContext } from '@playwright/test' ;
import { invokeBrowser } from '../../Browser/browserManager';
import { HomeDemoGuruPage } from '../page/HomeDemoGuruPage';
const { format } = require('date-fns');

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
    context = await browser.newContext({
      ignoreHTTPSErrors: true,
      recordVideo:{
        dir:`videos/${formattedDate}/`,
        size:{width:800, height:600}
      }
  });
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
