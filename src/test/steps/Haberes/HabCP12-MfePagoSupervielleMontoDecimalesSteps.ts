import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';
import { MFEMedianteArchivo } from '../../../locators/MFE-MedianteArchivo';

Given('DOCE-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("12");
    await haberesPage.login();
  });

  When('DOCE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo con monto con decimales',{timeout:80000}, async function () {    
    await haberesPage.MFEmedianteArchivo();
    await haberesPage.tipoLiquidacion('PAGO DE SUELDO');
  });

  When('DOCE-HABERES-seleccionamos la fecha de pago y presionamos continuar',{timeout:80000}, async function () {
    await haberesPage.fechaPagoPosterior();
    await haberesPage.subirArchivo('C:/Users/Agnostic/Desktop/Test-Nominas-Haberes/Automatizacion/Pagodesueldos_SupervielleConDecimal.xlsx');

  });

  Then('DOCE-HABERES-Nos envia a pantalla de confirmacion con los datos cargados en el archivo',{timeout:80000}, async function () {     
    try{
        let TipoLiquidacion = "//h2[text()='PAGO DE SUELDO']";
        let Registros = "//h2[text()='Registros validados a pagar 4 de 4']";
        let monto = "//p[contains(text(),'$')]";
          await haberesPage.textExpect(MFEMedianteArchivo.locatorTitleConfirmacion, 'Confirmá el pago');
          await haberesPage.textExpect(MFEMedianteArchivo.locatorTextRevisar, ' Revisá que los datos sean correctos.');
          await haberesPage.textExpect(TipoLiquidacion, 'PAGO DE SUELDO');
          await haberesPage.textExpect(Registros, 'Registros validados a pagar 4 de 4');
          await haberesPage.textExpect(monto, '$ 10.001,65');
          await haberesPage.screenShot(this);
          console.log("CP: Exitoso");
      } catch (error) {
          await haberesPage.screenShot(this);
          console.error('No se encontro algun dato');
          throw new Error('No se encontro algun dato');
  }
  });