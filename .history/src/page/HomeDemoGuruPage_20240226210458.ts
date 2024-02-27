import { Locators } from '../locators/locators';
import { BasePage } from './basePage';

export class HomeDemoGuruPage extends BasePage {
    constructor(page: any, context: any) {
        super(page, context);
    }


    //ir a la web
    async irAPage(): Promise<void> {
        await this.gotoPage("https://demo.guru99.com/test/newtours/",40000);
    }

    // Iniciar sesion en DemoGuru
    async login(user:string, pass:string): Promise<void> {
        await this.fillLocator(Locators.UserNameLocator,user);
        await this.fillLocator(Locators.PassLocator,pass);
        await this.clickElement(Locators.SubmitButton);
    }


    }
