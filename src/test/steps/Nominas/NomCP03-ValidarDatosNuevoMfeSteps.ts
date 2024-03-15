import { Given, When, Then} from '@cucumber/cucumber';
import { nominasPage } from '../../../hooks/hooks';
import { MFEAltaCuentaSueldo } from '../../../locators/MFE-AltaNomina';
  
  Given('TRES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await nominasPage.irAPage("03");
    await nominasPage.login();
  });

  When('TRES-nos vamos al nuevo MFE Alta Cuenta Sueldo',{timeout:80000}, async function () {
    await nominasPage.MFEAltaCuentaSueldo();
  });

  Then('TRES-Obtenemos la vista del nuevo MFE',{timeout:80000}, async function () {
    try{
      await nominasPage.textExpect(MFEAltaCuentaSueldo.locatorTitle, 'Elegí una opción para gestionar las altas de tus empleados.');
      await nominasPage.textExpect(MFEAltaCuentaSueldo.locatorHasta100, 'Hasta 100 cuentas sueldo por archivo');
      await nominasPage.textExpect(MFEAltaCuentaSueldo.locatorHasta50, 'Hasta 50 cuentas sueldo sin salir de Onlinebanking');
      await nominasPage.textExpect(MFEAltaCuentaSueldo.locatorArchivo, 'Mediante archivo');
      await nominasPage.textExpect(MFEAltaCuentaSueldo.locatortextDescarga, 'Descargá el archivo, completalo y subilo para abrir cuentas sueldo');
      await nominasPage.textExpect(MFEAltaCuentaSueldo.locatortextLinea, 'Armá tu lote de altas desde OnlineBanking');
      await nominasPage.elementPresent(MFEAltaCuentaSueldo.BtnCerrar);
      await nominasPage.screenShot(this);
      console.log("CP: Exitoso");
  } catch (error) {
      await nominasPage.screenShot(this);
      console.error('No se encontro algun dato');
      throw new Error('No se encontro algun dato');
}
});