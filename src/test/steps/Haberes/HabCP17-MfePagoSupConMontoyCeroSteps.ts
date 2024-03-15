import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';
import { MFEMedianteArchivo } from '../../../locators/MFE-MedianteArchivo';

  Given('DIECISIETE-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("17");
    await haberesPage.login();
  });

  When('DIECISIETE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo Supervielle',{timeout:80000}, async function () {
    await haberesPage.MFEmedianteArchivo();
    await haberesPage.tipoLiquidacion('PAGO DE SUELDO');
  });

  When('DIECISIETE-HABERES-seleccionamos la fecha de pago y presionamos continuar',{timeout:80000}, async function () {
    await haberesPage.fechaPagoPosterior();
    await haberesPage.subirArchivo('C:/Users/Agnostic/Desktop/Test-Nominas-Haberes/Automatizacion/Pagodesueldos_SupervielleMontosYvalorCero.xlsx');
 
  });

  Then('DIECISIETE-HABERES-Nos envia a pantalla de confirmacion con datos cargados',{timeout:80000}, async function () {
    try{
        let TipoLiquidacion = "//h2[text()='PAGO DE SUELDO']";
        let Registros = "//h2[text()='Registros validados a pagar 2 de 2']";
          await haberesPage.textExpect(MFEMedianteArchivo.locatorTitleConfirmacion, 'Confirmá el pago');
          await haberesPage.textExpect(MFEMedianteArchivo.locatorTextRevisar, ' Revisá que los datos sean correctos.');
          await haberesPage.textExpect(TipoLiquidacion, 'PAGO DE SUELDO');
          await haberesPage.textExpect(MFEMedianteArchivo.registrosIgnorados, 'Se han ignorado 2 registros por tener importe en cero. Si desea revisarlos presione el boton Volver.');
          await haberesPage.textExpect(Registros, 'Registros validados a pagar 2 de 2');
          await haberesPage.textExpect(MFEMedianteArchivo.monto, '$ 3.000,02');
          await haberesPage.screenShot(this);
          console.log("CP: Exitoso");
      } catch (error) {
          await haberesPage.screenShot(this);
          console.error('No se encontro algun dato');
          throw new Error('No se encontro algun dato');
  }
  });