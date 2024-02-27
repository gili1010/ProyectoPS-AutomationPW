import { Locators } from '../locators/locators';
import { BasePage } from './basePage';
import EnvironmentConfig from '../../config/ambiente';

// Obtén la URL del entorno
const url: string = EnvironmentConfig.getUrl();

export class HomeDemoGuruPage extends BasePage {
    constructor(page: any, context: any) {
        super(page, context);
    }


    //ir a la web
    async irAPage(): Promise<void> {
        await this.gotoPage(url,40000);
    }

    // Iniciar sesion en DemoGuru
    async login(user:string, pass:string): Promise<void> {
        await this.fillLocator(Locators.UserNameLocator,user);
        await this.fillLocator(Locators.PassLocator,pass);
        await this.clickElement(Locators.SubmitButton);
    }


    }
