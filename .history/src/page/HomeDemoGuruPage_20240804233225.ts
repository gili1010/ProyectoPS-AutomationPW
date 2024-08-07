import { Locators } from '../locators/locators';
import { BasePage } from './basePage';
import EnvironmentConfig from '../../config/ambiente';

// Obtén la URL del entorno
const config = EnvironmentConfig.getUrl();

export class HomeDemoGuruPage extends BasePage {
    constructor(page: any, context: any) {
        super(page, context);
    }


    //ir a la web
    async irAPage(): Promise<void> {
        await this.gotoPage(config.url,40000);
    }

        //ir al mock
        async irAMock(url:string): Promise<void> {
            await this.gotoPage(url,40000);
        }

    // Iniciar sesion en DemoGuru
    async login(user:string, pass:string): Promise<void> {
        await this.fillLocator(Locators.UserNameLocator,user);
        await this.fillLocator(Locators.PassLocator,pass);
        await this.clickElement(Locators.SubmitButton);
    }

    //mock
    async mock(): Promise<void> {
        //await this.page.route('*/**/api/v1/fruits', async route => {
        await this.page.route('https://services.infoauto.com.ar/preciosa-service/brands?queryString=FORD&vehicleType=cars', async route => {
        //const json = [{ name: 'Gili', id: 21 }];
        const json = {
            "response": [
                {
                    "id": 18,
                    "list_price": true,
                    "logo_url": "https://storage.googleapis.com/preciosa-cars-images/380a7fc4-a9c3-4953-ad10-313ff288ff35.png",
                    "name": "FORD",
                    "groups": null,
                    "prices": true,
                    "prices_from": 1995,
                    "prices_to": 2024,
                    "summary": "Ford Motor Company, más conocida como Ford, es una empresa multinacional de origen estadounidense, fundada por Henry Ford el 16 de junio de 1903. "
                },
                {
                    "id": 73,
                    "list_price": false,
                    "logo_url": null,
                    "name": "FORD CAMION",
                    "groups": null,
                    "prices": true,
                    "prices_from": 1995,
                    "prices_to": 2021,
                    "summary": "Ford Motor Company, más conocida como Ford, es una empresa multinacional de origen estadounidense, fundada por Henry Ford el 16 de junio de 1903. "
                }
            ],
            "pagination": {
                "totalResults": 2,
                "pageSize": 10,
                "totalPages": 1,
                "firstPage": 1,
                "lastPage": 1,
                "actualPage": 1,
                "nextPage": null
            }
        }
        await route.fulfill({ json });
      });
    }


    }
