import { allure } from "allure-playwright";
import { expect } from '@playwright/test';
import { Context } from "vm";
import { Page } from '@playwright/test' ;
import * as fs from 'fs';
import * as xlsx from 'xlsx';


export class BasePage {
    public readonly page: Page; 
    public readonly context: Context; 

    constructor(page: any, context: any) {
        this.page = page;
        this.context = context;
    }

    // Ir a la web con timeout personalizado
    async gotoPage(URL: string, timeout: number = 80000): Promise<void> {
        await this.page.goto(URL, { timeout });
    }


    // Escribir en el elemento
    async fillLocator(locator: string, param: string): Promise<void> {
        await this.page.locator(locator).fill(param);
    }

    // Click
    async clickElement(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }

    // ScreenShot
    async screenShotOld(name: string): Promise<void> {
        await allure.attachment(name, await this.page.screenshot(), {
            contentType: "image/png",
        });
    }
    async screenShot(cucumberContext: any): Promise<void> {
        let screenShot = await this.page.screenshot();
        cucumberContext.attach(screenShot, 'image/png');
        //this.attach(screenShot,"image/png");
    }

    // Obtener texto de elemento
    async obtenerTexto(locator: string): Promise<string> {
        const textoElemento = await this.page.$eval(locator, (element: any) => element.textContent);
        return textoElemento as string;
    }

    // Validaciones
    async textExpect(locator: string, text: string): Promise<void> {
        await this.page.waitForSelector(locator);
        try{
            await expect.soft(this.page.locator(locator)).toHaveText(text);
        } catch (error) {
            throw new Error(`El texto esperado '${text}' no coincide con el texto actual en el elemento con el selector '${locator}'`);
        }
    }
    async textExpect1(locator: string, text: string): Promise<void> {
        await expect(this.page.locator(locator)).toHaveText(text);
    }

    async compararTexto(value:string, text:string) {
        await expect(value).toBe(text)
    }

    async elementPresent(locator: string){
    const element = await this.page.isVisible(locator);
    if (!element) {
        throw new Error(`Elemento con el selector '${locator}' no encontrado o no visible.`);
        }
    }

    //Mostrar texto del elemento
    async mostrarTexto(locator: string){
        const element = await this.page.waitForSelector(locator);

        const actualText = await element.textContent();
        console.log(`Texto del elemento encontrado: '${actualText}'`);
    }

    async obtenerURL(): Promise<string> {
        const currentURL = await this.page.url();
        return currentURL;
    }

    //Devuelve true o false
    async compararURL(texto: string): Promise<boolean> {
        const currentURL = await this.page.url();
        return currentURL === texto;
    }

    //SUBIR ARCHIVO
    async subirArchivoPago(locator:string, rutaArchivo:string){
        const buttonElement = await this.page.locator(locator);
        await buttonElement.setInputFiles(rutaArchivo);
    }

         // Método para obtener la fecha actual en el formato deseado
         async obtenerFechaActualFormateada(): Promise<string> {
            const meses = [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
                "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];
            const fechaActual = new Date();
            const dia = fechaActual.getDate();
            const mes = meses[fechaActual.getMonth()];
            const año = fechaActual.getFullYear();
        
            return `${dia} de ${mes} de ${año}`;
        }

            // Método para obtener la fecha de mañana en el formato deseado
         async obtenerFechaPosteriorFormateada(): Promise<string> {
            const meses = [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
                "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];
            const fechaActual = new Date();
            const mes = meses[fechaActual.getMonth()];
            const año = fechaActual.getFullYear();

             // Verificar si el día actual es viernes
            if (fechaActual.getDay() === 5) { // 5 representa el viernes 
                fechaActual.setDate(fechaActual.getDate() + 3); // Sumar 3 días si es viernes
            } else {
                fechaActual.setDate(fechaActual.getDate() + 1); // Sumar 1 día en cualquier otro caso
            }
            const diaPosterior = fechaActual.getDate(); 
            return `${diaPosterior} de ${mes} de ${año}`;
        }

        //esperar 
        async esperar(time:number) {
            this.page.on('download', download => download.path().then(console.log));
            await this.page.waitForTimeout(time);
        }

        //Descargar
        async descargar(locator:string, plantilla:string) {
            const downloadPromise = this.page.waitForEvent('download');
            await this.clickElement(locator);
            await this.clickElement(plantilla);
            const download = await downloadPromise;

            await download.saveAs('./download/plantilla.xlsx') //+ download.suggestedFilename());         
        }

        //validar archivo
        async validarArchivo(nombreArchivo: string):Promise<string> {
            let columnas='';
            const rutaArchivo = `./download/${nombreArchivo}`;     
            // Verifica si el archivo existe
            if (!fs.existsSync(rutaArchivo)) {
                console.error(`El archivo ${nombreArchivo} no se encontró.`);}
                try {
                    // Leer el archivo Excel
                    const contenido = xlsx.readFile(rutaArchivo);
                    if (contenido.Sheets) {
                        // Acceder a la primera hoja de cálculo
                        const primeraHoja = contenido.Sheets[contenido.SheetNames[0]];
                        // Iterar sobre cada celda en la hoja de cálculo
                        Object.keys(primeraHoja).forEach((cell) => {
                            if (cell !== '!ref' && cell !== '!margins') {
                                // Obtén el valor 'v' de la celda y muéstralo
                                columnas += `${primeraHoja[cell].v}, `;
                            }
                        });         
                            // Eliminar la última coma y el espacio al final de la cadena
                            columnas = columnas.slice(0, -2);
                            return columnas;
                    } else {
                        console.error(`La hoja de cálculo en el archivo ${nombreArchivo} no tiene la estructura esperada.`);
                        return columnas;
                    }
                } catch (error) {
                    console.error(`Error al leer el archivo ${nombreArchivo}:`, error);
                    return columnas;
                }
}

}
