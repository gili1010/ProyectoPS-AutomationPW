import { Given, When, Then} from '@cucumber/cucumber';
import { haberesPage } from '../../../hooks/hooks';
import { MFEMedianteArchivo } from '../../../locators/MFE-MedianteArchivo';

  Given('TRES-HABERES-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await haberesPage.irAPage("03");
    await haberesPage.login();
  });

  When('TRES-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo PagoSupervielle',{timeout:80000}, async function () {
    await haberesPage.MFEmedianteArchivo();
    await haberesPage.tipoLiquidacion('PAGO DE SUELDO');
  });

  When('TRES-HABERES-seleccionamos la fecha de pago y presionamos continuar',{timeout:80000}, async function () {
    await haberesPage.fechaPago();
    await haberesPage.subirArchivo('C:/Users/Agnostic/Desktop/Test-Nominas-Haberes/Automatizacion/Pagodesueldos_Supervielle.xlsx');
  });

  Then('TRES-HABERES-Nos envia a pantalla de confirmacion con los datos cargados en el archivo',{timeout:80000}, async function () {
    try{
      let TipoLiquidacion = "//h2[text()='PAGO DE SUELDO']";
      let Registros = "//h2[text()='Registros validados a pagar 4 de 4']";
      let monto = "//p[contains(text(),'$')]";
        await haberesPage.textExpect(MFEMedianteArchivo.locatorTitleConfirmacion, 'Confirmá el pago');
        await haberesPage.textExpect(MFEMedianteArchivo.locatorTextRevisar, ' Revisá que los datos sean correctos.');
        await haberesPage.textExpect(TipoLiquidacion, 'PAGO DE SUELDO');
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