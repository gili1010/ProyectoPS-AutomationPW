import { Given, When, Then} from '@cucumber/cucumber';
import { nominasPage } from '../../../hooks/hooks';
import { Locators } from '../../../locators/locators';

Given('DOS-voy a Obe y iniciamos sesion',{timeout:80000}, async function () {
    await nominasPage.irAPage("02");
    await nominasPage.login();
  });

When('DOS-nos vamos a Alta Cuenta Sueldo y damos clic a Validar',{timeout:80000}, async function () {
  await nominasPage.AltaCuentaSueldo();
  await nominasPage.clickElement(Locators.ValidarCarga);
  });

Then('DOS-Obtenemos el mensaje Seleccione una sucursal de la lista', async function () {
    try{
      let locator = '//h3[@id="mensajeError"]/..//p';
      await nominasPage.textExpect(locator, "Seleccione una sucursal de la lista");
      await nominasPage.screenShot(this);
      console.log("CP: Exitoso");
  } catch (error) {
      await nominasPage.screenShot(this);
      console.error('No se encontro mensaje de alerta');
      throw new Error('No se encontro mensaje de alerta');
  }
  });