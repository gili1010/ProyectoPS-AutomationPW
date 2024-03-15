import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';

  Given('OCHO-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("08");
    await haberesPage.login();
  });

  When('OCHO-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo',{timeout:80000}, async function () {
    await haberesPage.MFEmedianteArchivo();
    await haberesPage.tipoLiquidacion('PAGO DE SUELDO');
  });

  When('OCHO-HABERES-seleccionamos la fecha de pago del dia y presionamos continuar',{timeout:80000}, async function () {
    await haberesPage.fechaPago();
    await haberesPage.subirArchivo('C:/Users/Agnostic/Desktop/Test-Nominas-Haberes/Automatizacion/Pagodesueldos_Mixto.xlsx');
  });

  Then('OCHO-HABERES-Nos envia a pantalla con alerta {string}',{timeout:80000}, async function (mje:string) {
    try{
        let result:string = `//h2[text()='No podemos procesar el archivo']`;
        let mjeError:string = "//li[text()='Linea 2: El pago a otros bancos no esta disponible en la fecha del dia']";
          await haberesPage.textExpect(result, 'No podemos procesar el archivo');
          await haberesPage.textExpect(mjeError, 'Linea 2: '+mje);
          await haberesPage.screenShot(this);
          console.log("CP: Exitoso");
      } catch (error) {
          await haberesPage.screenShot(this);
          console.error('No aparece mensaje de error');
          throw new Error('No aparece mensaje de error');
  }
  });