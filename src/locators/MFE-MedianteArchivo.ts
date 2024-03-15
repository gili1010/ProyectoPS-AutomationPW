export class MFEMedianteArchivo {

    static readonly BtnCerrar: string = `//button`;
    static readonly BtnDescargarArchivo = "//button//span[contains(text(),'Descargar plantilla')]"
    static readonly plantillaVacia = "//h2//i[text()='Plantilla vacía']";
    static readonly BtnContinuar = "//button//span[text()='Continuar']";
    static readonly BtnConfirmar = "//button//span[text()='Confirmar']";

    //VALIDACIONES DE TEXTO
    static readonly locatorTitleMA: string = "//h2[text()='Descargá, completá y subí tus pagos']";
    static readonly locatorHasta100MA: string = "//p[text()=' Podés pagar hasta 100 cuentas a la vez.']";
    static readonly locatorArchivoMA: string = "//h2[text()='Agilizá la carga de datos en el archivo']";
    static readonly locatorDescargandoDesdeMA: string = "//p[contains(text(),'Descargando la nómina Supervielle desde : ')]";
    static readonly labelTipoLiquidacion = "//label[text()=' Tipo de liquidación ']";
    static readonly labelCargaArchivo = "//label[text()='Carga de archivo']";

    //Pantalla confirmacion de pago
    static readonly locatorTitleConfirmacion= "//h2[text()='Confirmá el pago']";
    static readonly locatorTextRevisar="//p[text()=' Revisá que los datos sean correctos.']";
    static readonly registrosValidados = "//h2[text()='Registros validados a pagar 0 de 0']";
    static readonly registrosIgnorados = "//h2[text()='Se han ignorado 2 registros por tener importe en cero. Si desea revisarlos presione el boton ']"
    static readonly monto = "//p[contains(text(),'$')]";
    static readonly errorDeLote = "//h2[text()='Tuvimos un inconveniente al confirmar el lote']";
    



}