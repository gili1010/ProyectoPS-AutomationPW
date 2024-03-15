import { Given, When, Then} from '@cucumber/cucumber';
import { nominasPage } from '../../../hooks/hooks';
import { MFEAltaCuentaSueldo } from '../../../locators/MFE-AltaNomina';

  Given('SEIS-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await nominasPage.irAPage("06");
    await nominasPage.login();
  });

  When('SEIS-nos vamos a MFE Alta Cuenta Sueldo, mediante archivo',{timeout:80000}, async function () {
    await nominasPage.MFEAltaCuentaSueldo();
    await nominasPage.MFEAltaMedianteArchivo();
  });

  When('SEIS-seleciionamos suc, sector y cargamos archivo',{timeout:80000}, async function () {
    await nominasPage.cargarSuc('AGENCIA  BARRIO NORTE');
    await nominasPage.cargarSector();
    await nominasPage.subirArchivo('C:/Users/Agnostic/Desktop/Test-Nominas-Haberes/Automatizacion/AltaPS.JSON');
  });

  Then('SEIS-Nos genera un alta de lote',{timeout:80000}, async function () {
    try{
    await nominasPage.textExpect(MFEAltaCuentaSueldo.tituloCargaCorrecta, '¡Cargaste tu archivo con éxito!');
    await nominasPage.textExpect(MFEAltaCuentaSueldo.parrafoCargaCorrecta, 'Consultá el estado desde "Consulta de lotes"');
    await nominasPage.screenShot(this);
  } catch (error) {
    await nominasPage.screenShot(this);
    console.error('No se genero el lote');
    throw new Error('No se genero el lote');
}
  });