import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';
import { MFEMedianteArchivo } from '../../../locators/MFE-MedianteArchivo';

 Given('UNO-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("01");
    await haberesPage.login();
  });

  When('UNO-HABERES-nos vamos al nuevo MFE Mediante Archivo',{timeout:80000}, async function () {
    await haberesPage.MFEmedianteArchivo();
  });

  Then('UNO-HABERES-Obtenemos la vista del nuevo MFE Mediante Archivo',{timeout:80000}, async function () {
    try{
        await haberesPage.textExpect(MFEMedianteArchivo.locatorTitleMA, 'Descargá, completá y subí tus pagos');
        await haberesPage.textExpect(MFEMedianteArchivo.locatorHasta100MA, ' Podés pagar hasta 100 cuentas a la vez.');
        await haberesPage.textExpect(MFEMedianteArchivo.BtnDescargarArchivo, 'Descargar plantilla');
        await haberesPage.textExpect(MFEMedianteArchivo.labelTipoLiquidacion, ' Tipo de liquidación ');
        await haberesPage.elementPresent(MFEMedianteArchivo.BtnCerrar);
        await haberesPage.textExpect(MFEMedianteArchivo.labelCargaArchivo, 'Carga de archivo');
        await haberesPage.elementPresent(MFEMedianteArchivo.BtnDescargarArchivo);
        await haberesPage.screenShot(this);
        console.log("CP: Exitoso");
    } catch (error) {
        await haberesPage.screenShot(this);
        console.error('No se encontro algun dato');
        throw new Error('No se encontro algun dato');
}
  });