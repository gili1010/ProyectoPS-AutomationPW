import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';
import { MFEMedianteArchivo } from '../../../locators/MFE-MedianteArchivo';

  Given('SEIS-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("06");
    await haberesPage.login();
  });

  When('SEIS-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo con monto a pagar en cero',{timeout:80000}, async function () {     
    await haberesPage.MFEmedianteArchivo();
    await haberesPage.tipoLiquidacion('PAGO DE SUELDO');
  });

  When('SEIS-HABERES-seleccionamos la fecha de pago y presionamos continuar',{timeout:80000}, async function () {
    await haberesPage.fechaPagoPosterior();
    await haberesPage.subirArchivo('C:/Users/Agnostic/Desktop/Test-Nominas-Haberes/Automatizacion/Pagodesueldos_MixtoImporteCero.xlsx');
  });

  Then('SEIS-HABERES-Nos envia a pantalla de error con alerta debe ingresar acreditaciones',{timeout:80000}, async function () {
    try{
      await haberesPage.textExpect(MFEMedianteArchivo.registrosValidados, 'Registros validados a pagar 0 de 0');
      await haberesPage.textExpect(MFEMedianteArchivo.registrosIgnorados, 'Se han ignorado 2 registros por tener importe en cero. Si desea revisarlos presione el botón Volver.');
      await haberesPage.textExpect(MFEMedianteArchivo.monto, '$ 0,00');
      await haberesPage.screenShot(this);
      await haberesPage.clickElement(MFEMedianteArchivo.BtnConfirmar);
      await haberesPage.textExpect(MFEMedianteArchivo.errorDeLote, 'Tuvimos un inconveniente al confirmar el lote');
      await haberesPage.screenShot(this);
      console.log("CP: Exitoso");
      } catch (error) {
          await haberesPage.screenShot(this);
          console.error('No valida montos en 0');
          throw new Error('No valida montos en 0');
  }
  });