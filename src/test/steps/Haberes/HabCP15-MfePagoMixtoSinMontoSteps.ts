import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';

  Given('QUINCE-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("15");
    await haberesPage.login();
  });

  When('QUINCE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo mixto sin monto',{timeout:80000}, async function () {
    await haberesPage.MFEmedianteArchivo();
    await haberesPage.tipoLiquidacion('PAGO DE SUELDO');
  });

  When('QUINCE-HABERES-seleccionamos la fecha de pago y presionamos continuar',{timeout:80000}, async function () {
    await haberesPage.fechaPagoPosterior();
    await haberesPage.subirArchivo('C:/Users/Agnostic/Desktop/Test-Nominas-Haberes/Automatizacion/Pagodesueldos_MixtoSinImporte.xlsx');
 
  });

  Then('QUINCE-HABERES-Nos envia a pantalla de error',{timeout:80000}, async function () {
    try{
        let errorOperacion = "//h2[text()='No es posible continuar con esta operación']";
          await haberesPage.textExpect(errorOperacion, 'No es posible continuar con esta operación');
          await haberesPage.screenShot(this);
          console.log("CP: Exitoso");
      } catch (error) {
          await haberesPage.screenShot(this);
          console.error('No se encontro algun dato');
          throw new Error('No se encontro algun dato');
  }
  });