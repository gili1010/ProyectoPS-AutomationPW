import { Given, When, Then} from '@cucumber/cucumber';
import { nominasPage } from '../../../hooks/hooks';
import { MFEAltaCuentaSueldo } from '../../../locators/MFE-AltaNomina';

  Given('CINCO-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await nominasPage.irAPage("05");
    await nominasPage.login();
  });

  When('CINCO-nos vamos a MFE Alta Cuenta Sueldo, mediante archivo',{timeout:80000}, async function () {
    await nominasPage.MFEAltaCuentaSueldo();
    await nominasPage.MFEAltaMedianteArchivo();
  });

  Then('CINCO-Validamos los datos de pantalla',{timeout:80000}, async function () {
    try{
        await nominasPage.textExpect(MFEAltaCuentaSueldo.TitleDescarga, 'Descargá, completá y subí');
        await nominasPage.textExpect(MFEAltaCuentaSueldo.parrafoDescarga, ' Descargá el archivo y generá hasta 100 cuentas sueldo en un solo paso.');
        await nominasPage.textExpect(MFEAltaCuentaSueldo.sector, ' Sector ');
        await nominasPage.textExpect(MFEAltaCuentaSueldo.sucursal, ' Sucursal de radicación ');
        await nominasPage.elementPresent(MFEAltaCuentaSueldo.BtnCerrar);
        await nominasPage.screenShot(this);
        console.log("CP: Exitoso");
    } catch (error) {
        await nominasPage.screenShot(this);
        console.error('No se encontro algun dato');
        throw new Error('No se encontro algun dato');
  }
  });