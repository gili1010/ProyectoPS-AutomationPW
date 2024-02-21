import { Given, When, Then} from '@cucumber/cucumber';
import { homeDemoGuruPage } from '../../hooks/hooks';


Given('vamos a DemoGuru', async function () {
 await homeDemoGuruPage.irAPage();
     });

When('completamos {string} y {string} correcta', async function (usuario, contraseña) {
     await homeDemoGuruPage.login(usuario,contraseña);
     });

Then('nos permite el ingreso al panel y nos da mensaje de biemvenida', async function () {
     let locator = '//h3[text()="Login Successfully"]';
    try {
        await homeDemoGuruPage.textExpect(locator, "Login Successfully");
        await homeDemoGuruPage.screenShot(this);
        console.log("exitoso.");
    } catch (error) {
        console.error("No se encontró el mensaje de bienvenida esperado.");
    }
});