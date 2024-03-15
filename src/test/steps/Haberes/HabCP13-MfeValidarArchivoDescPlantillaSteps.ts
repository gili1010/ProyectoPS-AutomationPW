import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';
import { MFEMedianteArchivo } from '../../../locators/MFE-MedianteArchivo';

  Given('TRECE-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("13");
    await haberesPage.login();
  });

  When('TRECE-HABERES-nos vamos a MFE Mediante Archivo',{timeout:80000}, async function () {
    await haberesPage.MFEmedianteArchivo();
  });

  When('TRECE-HABERES-presionamos btn Descargar plantilla',{timeout:80000}, async function () {
    await haberesPage.descargar(MFEMedianteArchivo.BtnDescargarArchivo,MFEMedianteArchivo.plantillaVacia);
  });

  Then('TRECE-HABERES-validamos la descarga del archivo',{timeout:80000}, async function () {
    try {
        await haberesPage.esperar(5000)
        await haberesPage.screenShot(this);
        const archivoValidado = (await haberesPage.validarArchivo('plantilla.xlsx'));
        console.log("validacion: "+archivoValidado);
        await haberesPage.compararTexto(archivoValidado, 'NOMBRE, TIPO DOCUMENTO, NRO DOCUMENTO, PAIS DEL DOCUMENTO, CBU, IMPORTE');
    }catch (error) {
        console.error('No se encontro algun dato ');
        throw new Error('No se encontro algun dato');
    }
  });