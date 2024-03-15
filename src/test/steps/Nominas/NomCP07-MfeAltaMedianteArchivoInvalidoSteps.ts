import { Given, When, Then} from '@cucumber/cucumber';
import { nominasPage } from '../../../hooks/hooks';
import { MFEAltaCuentaSueldo } from '../../../locators/MFE-AltaNomina';

  Given('SIETE-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await nominasPage.irAPage("07");
    await nominasPage.login();
  });

  When('SIETE-nos vamos a MFE Alta Cuenta Sueldo, mediante archivo',{timeout:80000}, async function () {
    await nominasPage.MFEAltaCuentaSueldo();
    await nominasPage.MFEAltaMedianteArchivo();
  });

  When('SIETE-seleciionamos suc, sector y cargamos archivo incorrecto',{timeout:80000}, async function () {
    await nominasPage.cargarSuc('AGENCIA  BARRIO NORTE');
    await nominasPage.cargarSector();
    await nominasPage.subirArchivoPago('//input[@type="file"]','C:/Users/Agnostic/Desktop/Test-Nominas-Haberes/Automatizacion/Pagodesueldos_Mixto.xlsx');
  });

  Then('SIETE-Nos genera un error El archivo seleccionado no tiene la extensión permitida',{timeout:80000}, async function () {
    try{
        await nominasPage.textExpect(MFEAltaCuentaSueldo.TitleDescarga, 'Descargá, completá y subí');
        await nominasPage.textExpect(MFEAltaCuentaSueldo.parrafoDescarga, ' Descargá el archivo y generá hasta 100 cuentas sueldo en un solo paso.');
        await nominasPage.textExpect(MFEAltaCuentaSueldo.sector, ' Sector ');
        await nominasPage.textExpect(MFEAltaCuentaSueldo.sucursal, ' Sucursal de radicación ');
        await nominasPage.textExpect(MFEAltaCuentaSueldo.errorArchivo, ' El archivo seleccionado no tiene la extensión permitida (.json). ');
        await nominasPage.elementPresent(MFEAltaCuentaSueldo.BtnCerrar);
        await nominasPage.screenShot(this);
        console.log("CP: Exitoso");
    } catch (error) {
        await nominasPage.screenShot(this);
        console.error('No se encontro algun dato');
        throw new Error('No se encontro algun dato');
  }
  });