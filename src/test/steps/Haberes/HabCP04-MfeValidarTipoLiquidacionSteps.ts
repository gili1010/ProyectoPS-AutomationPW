import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';
import { MFEMedianteArchivo } from '../../../locators/MFE-MedianteArchivo';

  Given('CUATRO-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("04");
    await haberesPage.login();
  });

  When('CUATRO-HABERES-nos vamos a MFE Mediante Archivo, seleccionamos tipo {string}',{timeout:80000}, async function (tipo: string) {
    await haberesPage.MFEmedianteArchivo();
    await haberesPage.tipoLiquidacion(tipo);

  });

  When('CUATRO-HABERES-cargamos archivo PagoSupervielle y presionamos continuar',{timeout:80000}, async function () {
    await haberesPage.fechaPago();
    await haberesPage.subirArchivo('C:/Users/Agnostic/Desktop/Test-Nominas-Haberes/Automatizacion/Pagodesueldos_Supervielle.xlsx');
  });

  Then('CUATRO-HABERES-Nos envia a pantalla de confirmacion con los datos {string}',{timeout:80000}, async function (TipoLiquidacion: string) {

    try{
        let Registros = "//h2[text()='Registros validados a pagar 4 de 4']";
        let monto = "//p[contains(text(),'$')]";
        let result:string = `//h2[text()='${TipoLiquidacion}']`
          await haberesPage.textExpect(MFEMedianteArchivo.locatorTitleConfirmacion, 'Confirmá el pago');
          await haberesPage.textExpect(MFEMedianteArchivo.locatorTextRevisar, ' Revisá que los datos sean correctos.');
          await haberesPage.textExpect(result, TipoLiquidacion);
          await haberesPage.textExpect(Registros, 'Registros validados a pagar 4 de 4');
          await haberesPage.textExpect(monto, '$ 10.000,00');
          await haberesPage.screenShot(this);
          console.log("CP: Exitoso");
      } catch (error) {
          await haberesPage.screenShot(this);
          console.error('No se encontro algun dato');
          throw new Error('No se encontro algun dato');
  }
  });