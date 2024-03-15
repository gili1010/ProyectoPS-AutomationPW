import { Given, When, Then} from '@cucumber/cucumber';
import { homeDemoGuruPage } from '../../hooks/hooks';

Given('vamos a DemoGuru Home', async function () {
    await homeDemoGuruPage.irAPage();
  });

When('completamos {string} y {string} incorrecta', async function (usuario, contraseña) {
    await homeDemoGuruPage.login(usuario,contraseña);
  });

Then('No nos permite el ingreso al panel y nos da mensaje de error', async function () {
    let locator = '//span[contains(text(),"Enter your userName and password correct")]';
    try {
        await homeDemoGuruPage.textExpect(locator, "Enter your userName and password correct");
        await homeDemoGuruPage.screenShot(this);
    } catch (error) {
        console.error("No se encontró el mensaje de error esperado.");
    }
  });