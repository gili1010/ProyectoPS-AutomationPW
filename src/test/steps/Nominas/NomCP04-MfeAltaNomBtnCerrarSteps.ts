import { Given, When, Then} from '@cucumber/cucumber';
import { nominasPage } from '../../../hooks/hooks';
import { MFEAltaCuentaSueldo } from '../../../locators/MFE-AltaNomina';

 Given('CUATRO-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await nominasPage.irAPage("04");
    await nominasPage.login();
  });

  When('CUATRO-nos vamos a MFE Alta Cuenta Sueldo, presionamos cerrar',{timeout:80000}, async function () {
    await nominasPage.MFEAltaCuentaSueldo();
    await nominasPage.clickElement(MFEAltaCuentaSueldo.BtnCerrar);
  });

  Then('CUATRO-Volvemos a la vista de inicio',{timeout:80000}, async function () {
    try {
        let result = await nominasPage.compararURL('https://empresastst.supervielle.com.ar/obe/posicion-consolidada');
        console.log(result);
        if(result==true)
        console.log("CP: Exitoso");
      else
        throw new Error('No se encontro la URL correcta');
    } catch (error) {
        throw new Error('No se encontro la URL correcta'+ error);
    }
});