import { allure } from "allure-playwright";
import { expect } from '@playwright/test';
import { Context } from "vm";
import { Page } from '@playwright/test' ;

export class BasePage {
    public readonly page: Page; 
    public readonly context: Context; 

    constructor(page: any, context: any) {
        this.page = page;
        this.context = context;
    }

    // Ir a la web con timeout personalizado
    async gotoPage(URL: string, timeout: number = 80000): Promise<void> {
        await this.page.goto(URL, { timeout });
    }


    // Escribir en el elemento
    async fillLocator(locator: string, param: string): Promise<void> {
        await this.page.locator(locator).fill(param);
    }

    // Click
    async clickElement(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }

    // ScreenShot
    async screenShotOld(name: string): Promise<void> {
        await allure.attachment(name, await this.page.screenshot(), {
            contentType: "image/png",
        });
    }
    async screenShot(cucumberContext: any): Promise<void> {
        let screenShot = await this.page.screenshot();
        cucumberContext.attach(screenShot, 'image/png');
        //this.attach(screenShot,"image/png");
    }

    // Obtener texto de elemento
    async obtenerTexto(locator: string): Promise<string> {
        const textoElemento = await this.page.$eval(locator, (element: any) => element.textContent);
        return textoElemento as string;
    }

    // Validaciones
    async textExpect(locator: string, text: string): Promise<void> {
        await expect(this.page.locator(locator)).toHaveText(text);
    }
}
