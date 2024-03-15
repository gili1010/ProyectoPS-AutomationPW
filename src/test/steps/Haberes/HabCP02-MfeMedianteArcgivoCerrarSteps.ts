import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';
import { MFEMedianteArchivo } from '../../../locators/MFE-MedianteArchivo';

 Given('DOS-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("02");
    await haberesPage.login();
  });

  When('DOS-HABERES-nos vamos a MFE Mediante Archivo, presionamos cerrar',{timeout:80000}, async function () {
    await haberesPage.MFEmedianteArchivo();
    await haberesPage.clickElement(MFEMedianteArchivo.BtnCerrar);
  });

  Then('DOS-HABERES-Volvemos a la vista de inicio',{timeout:80000}, async function () {
    try {
        let result = await haberesPage.compararURL('https://empresastst.supervielle.com.ar/obe/posicion-consolidada');
        console.log(result);
        if(result==true)
        console.log("CP: Exitoso");
      else
        throw new Error('No se encontro la URL correcta');
    } catch (error) {
        throw new Error('No se encontro la URL correcta'+ error);
    }
  });