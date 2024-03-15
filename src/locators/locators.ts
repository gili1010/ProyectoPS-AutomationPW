export class Locators {
    
/*===================================================================================*/
/*===================================Login===========================================*/
/*===================================================================================*/

static readonly UserNameLocator: string = 'input[id="identification"]';
static readonly PassLocator: string = 'input[id="password"]';
static readonly SubmitButton: string = '//button[@id="btn_ingresar"]';

/*===================================================================================*/
/*===================================Menu============================================*/
/*===================================================================================*/

//Pagos y transferencias
static readonly PagosYtransf: string = '//li[@id="menu-pagos-y-transferencias"]';

static readonly MfeAltaCuentaSueldo: string = '//a[@id="ember633" and text()="Alta de Cuenta Sueldo ¡Nuevo!"]';

static readonly MfeMedianteArchivo: string = '//a[contains(text(),"Mediante archivo")]';

/*===================================================================================*/
/*=================================Nominas===========================================*/
/*===================================================================================*/

/* Alta Nomina */
static readonly SelSucursal: string = '//select[@id="selector-sucursales"]';
static readonly ValidarCarga: string = '//button[@id="btnCargarLote"]';


/*===================================================================================*/
/*=================================Haberes===========================================*/
/*===================================================================================*/



}