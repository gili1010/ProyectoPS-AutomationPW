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
let recordVideoConfig;


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

// Verifica si la variable de entorno npm_config_VIDEO está configurada como TRUE
if (process.env.npm_config_VIDEO === 'TRUE') {
  recordVideoConfig = {
      dir: `videos/${formattedDate}/`,
      size: { width: 800, height: 600 }
  };
}

    context = await browser.newContext({
      ignoreHTTPSErrors: true,
      recordVideo: recordVideoConfig  
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
