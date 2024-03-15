import { Locators } from '../locators/locators';
import { MFEMedianteArchivo } from '../locators/MFE-MedianteArchivo';
import { BasePage } from './basePage';

import EnvironmentConfig from '../../config/ambiente';

// Obtén la URL del entorno
const config = EnvironmentConfig.getUrl();

export class HaberesPage extends BasePage {
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
    async MFEmedianteArchivo(): Promise<void> {
        await this.clickElement(Locators.PagosYtransf);
        await this.clickElement(Locators.MfeMedianteArchivo);
    }

    //TIPO LIQUIDACION
    /* PAGO DE SUELDO */
    /* PAGO DE HONORARIOS */
    /* PAGO DE VIATICOS */
    /* PAGO DE CONCEPTO */
    /* PAGO FONDO DE DESEMPLEO */
    async tipoLiquidacion(name:string){
        await this.page.locator('kite-select').getByRole('img').click();
        await this.page.getByRole('option', { name: name }).click();
    }

    //Fecha de pago
    /* Ejemplo: '5 de Marzo de 2024' */
        async fechaPago(){

            const fechaActual:string = await this.obtenerFechaActualFormateada();
            console.log(fechaActual);
            await this.page.getByRole('button', { name: 'Fecha de Pago' }).click();
            await this.page.getByLabel(fechaActual, { exact: true }).click();
            await this.page.getByRole('button', { name: 'Aceptar' }).click();
        }

        async fechaPagoPosterior(){

            const fechaActual:string = await this.obtenerFechaPosteriorFormateada();
            console.log(fechaActual);
            await this.page.getByRole('button', { name: 'Fecha de Pago' }).click();
            await this.page.getByLabel(fechaActual, { exact: true }).click();
            await this.page.getByRole('button', { name: 'Aceptar' }).click();
        }
        

    //pago a Superviell
    async subirArchivo(archivo:string): Promise<void> {
        await this.subirArchivoPago('//input[@type="file"]',archivo);
        //await this.page.locator('//input[@type="file"]').setInputFiles('C:/Users/Agnostic/Desktop/Test/Pagodesueldos_Supervielle.xlsx');
        //await this.page.waitForTimeout(5000);
        await this.clickElement(MFEMedianteArchivo.BtnContinuar);
    }


}
