import { Locators } from '../locators/locators';
import { BasePage } from './basePage';

import EnvironmentConfig from '../../config/ambiente';
import { MFEAltaCuentaSueldo } from '../locators/MFE-AltaNomina';

// Obtén la URL del entorno
const config = EnvironmentConfig.getUrl();

export class NominasPage extends BasePage {
    constructor(page: any, context: any) {
        super(page, context);
    }


    //ir a la web
    async irAPage(nro:string): Promise<void> {
        console.log("===============Inicio CP"+nro+"===============");
        await this.gotoPage(config.url,80000);
    }

    // Iniciar sesion en OBE
    async login(): Promise<void> {
        await this.fillLocator(Locators.UserNameLocator, config.user);
        await this.fillLocator(Locators.PassLocator, config.password);
        await this.clickElement(Locators.SubmitButton);
    }

    // Alta Cuenta Sueldo
    async AltaCuentaSueldo(): Promise<void> {
        await this.clickElement(Locators.PagosYtransf);
        await this.page.getByText('Alta de Cuenta Sueldo', { exact: true }).click();
        await this.page.getByLabel('Close Tour').click();
    }

        // Alta Cuenta Sueldo MFE Nuevo
        async MFEAltaCuentaSueldo(): Promise<void> {
            await this.clickElement(Locators.PagosYtransf);
            await this.page.getByText('Alta de Cuenta Sueldo ¡Nuevo!').click();
        }

        // Mediante Archivo
        async MFEAltaMedianteArchivo(): Promise<void> {
            await this.clickElement(MFEAltaCuentaSueldo.locatorArchivo);
        }

    //cargar sucursal
    async cargarSuc(suc:string) {
        await this.page.locator('kite-select').filter({ hasText: 'Sucursal de radicación' }).getByRole('img').click();
        await this.page.getByText(suc).click();
    }

    async cargarSector() {
        await this.page.locator('kite-select').filter({ hasText: 'Sector ISLANDS INTERN.SCHOOL' }).getByRole('img').click();
        await this.page.getByText('ISLANDS INTERN.SCHOOL SR').click();
    }

    async subirArchivo(archivo:string): Promise<void> {
        await this.subirArchivoPago('//input[@type="file"]',archivo);
        await this.page.waitForTimeout(2000);
        await this.clickElement(MFEAltaCuentaSueldo.BtnContinuar);
    }

    // seleccionar sucursal
    async selecSucursal(suc: string): Promise<void> {
        await this.page.locator(Locators.SelSucursal).selectOption(suc);
    }
}
