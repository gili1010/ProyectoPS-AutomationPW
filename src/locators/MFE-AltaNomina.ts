export class MFEAltaCuentaSueldo {

    static readonly BtnCerrar: string = `//button`;
    static readonly BtnContinuar = "//button//span[text()='Continuar']";

    //VALIDACIONES DE TEXTO
    static readonly locatorTitle: string = "//h1[text()='Elegí una opción para gestionar las altas de tus empleados.']";
    static readonly locatorHasta100: string = "//p[text()='Hasta 100 cuentas sueldo por archivo']";
    static readonly locatorArchivo: string = "//h2[text()='Mediante archivo']";
    static readonly locatorHasta50: string = "//p[text()='Hasta 50 cuentas sueldo sin salir de Onlinebanking']";
    static readonly locatortextDescarga: string = "//p[text()='Descargá el archivo, completalo y subilo para abrir cuentas sueldo']";
    static readonly locatortextLinea: string = "//p[text()='Armá tu lote de altas desde OnlineBanking']";

    //MEDIANTE ARCHIVO
    static readonly TitleDescarga: string = "//h2[text()='Descargá, completá y subí']";
    static readonly parrafoDescarga: string = "//p[text()=' Descargá el archivo y generá hasta 100 cuentas sueldo en un solo paso.']";
    static readonly buttonDescarga: string = "//span[text()='Descargar plantilla']";
    static readonly sector: string = "//label[text()=' Sector ']";
    static readonly sucursal: string = "//label[text()=' Sucursal de radicación ']";
    static readonly carga: string = "//label[text()=' Carga de archivo ']";
    
    //confirmacion
    static readonly tituloCargaCorrecta="//h2[text()='¡Cargaste tu archivo con éxito!']";
    static readonly parrafoCargaCorrecta="//h2[contains(text(),'Consultá el estado desde')]";
    static readonly errorArchivo = "//p[text()=' El archivo seleccionado no tiene la extensión permitida (.json). ']";

}