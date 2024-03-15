import { Given, When, Then} from '@cucumber/cucumber';
import { nominasPage } from '../../../hooks/hooks';

    Given('voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
        await nominasPage.irAPage("01");
        await nominasPage.login();
    });

    When('nos vamos a Alta Cuenta Sueldo y seleccionamos suc {string}',{timeout:80000}, async function (suc) {
        await nominasPage.AltaCuentaSueldo();
        await nominasPage.selecSucursal(suc);
    });

    Then('Obtenemos la sucursal {string} elegida', async function (suc) {
        try{
            let locator: string = `//select[@id="selector-sucursales"]//option[@value="2"]`;
            let text: string = '2 -  ALTOS DE PALERMO - AV. SANTA FE 3164 - CAPITAL FEDERAL - CAPITAL FEDERAL';
            await nominasPage.textExpect1(locator, text);
            await nominasPage.screenShot(this);
            console.log("CP: Exitoso");
        } catch (error) {
            await nominasPage.screenShot(this);
            console.error('No se encontro susucrsal');
            throw new Error('No se encontro sucursal');
        }
    });

