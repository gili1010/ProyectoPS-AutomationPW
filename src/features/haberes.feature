@haberes
@allure.label.suite:Haberes
@allure.label.owner=Luciano_Gili
Feature: Pruebas

@testHaberes
Scenario: 01-Validar datos MFE Mediante Archivo

Given UNO-HABERES-voy a Obe y iniciamos sesion
When UNO-HABERES-nos vamos al nuevo MFE Mediante Archivo
Then UNO-HABERES-Obtenemos la vista del nuevo MFE Mediante Archivo

@testHaberes
Scenario: 02- MFE Mediante Archivo Btn Cerrar

Given DOS-HABERES-voy a Obe y iniciamos sesion
When DOS-HABERES-nos vamos a MFE Mediante Archivo, presionamos cerrar
Then DOS-HABERES-Volvemos a la vista de inicio  

@testHaberes
Scenario: 03- MFE Pago a Supervielle

Given TRES-HABERES-voy a Obe y iniciamos sesion
When TRES-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo PagoSupervielle
And  TRES-HABERES-seleccionamos la fecha de pago y presionamos continuar
Then TRES-HABERES-Nos envia a pantalla de confirmacion con los datos cargados en el archivo

@testHaberes
Scenario Outline: 04- MFE Pago a Supervielle tipo liquidacion <TipoLiquidacion>

Given CUATRO-HABERES-voy a Obe y iniciamos sesion
When CUATRO-HABERES-nos vamos a MFE Mediante Archivo, seleccionamos tipo <TipoLiquidacion>
And  CUATRO-HABERES-cargamos archivo PagoSupervielle y presionamos continuar
Then CUATRO-HABERES-Nos envia a pantalla de confirmacion con los datos <TipoLiquidacion>
Examples: 
    | TipoLiquidacion         |
    | "PAGO DE HONORARIOS"      |
    | "PAGO DE VIATICOS"       |
    | "PAGO DE CONCEPTO"        |
    | "PAGO FONDO DE DESEMPLEO" |


@testHaberes
Scenario: 05- MFE Pago a Supervielle con monto "0"

Given CINCO-HABERES-voy a Obe y iniciamos sesion
When CINCO-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo con monto a pagar en cero
And  CINCO-HABERES-seleccionamos la fecha de pago y presionamos continuar
Then CINCO-HABERES-Nos envia a pantalla de error con alerta debe ingresar acreditaciones

@testHaberes
Scenario: 06- MFE Pago mixto con monto "0"

Given SEIS-HABERES-voy a Obe y iniciamos sesion
When SEIS-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo con monto a pagar en cero
And  SEIS-HABERES-seleccionamos la fecha de pago y presionamos continuar
Then SEIS-HABERES-Nos envia a pantalla de error con alerta debe ingresar acreditaciones

@testHaberes
Scenario: 07- MFE Pago a otros bancos con monto "0"

Given SIETE-HABERES-voy a Obe y iniciamos sesion
When SIETE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo con monto a pagar en cero
And  SIETE-HABERES-seleccionamos la fecha de pago y presionamos continuar
Then SIETE-HABERES-Nos envia a pantalla de error con alerta debe ingresar acreditaciones

@testHaberes
Scenario: 08- MFE Pago mixto con fecha del dia

Given OCHO-HABERES-voy a Obe y iniciamos sesion
When OCHO-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo
And  OCHO-HABERES-seleccionamos la fecha de pago del dia y presionamos continuar
Then OCHO-HABERES-Nos envia a pantalla con alerta "El pago a otros bancos no esta disponible en la fecha del dia"

@testHaberes
Scenario: 09- MFE Pago a otros bancos con fecha del dia

Given NUEVE-HABERES-voy a Obe y iniciamos sesion
When NUEVE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo
And  NUEVE-HABERES-seleccionamos la fecha de pago del dia y presionamos continuar
Then NUEVE-HABERES-Nos envia a pantalla con alerta "El pago a otros bancos no esta disponible en la fecha del dia"

@testHaberes
Scenario: 10- MFE Pago a otros bancos con monto con decimales

Given DIEZ-HABERES-voy a Obe y iniciamos sesion
When DIEZ-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo con monto con decimales
And  DIEZ-HABERES-seleccionamos la fecha de pago y presionamos continuar
Then DIEZ-HABERES-Nos envia a pantalla de confirmacion con los datos cargados en el archivo

@testHaberes
Scenario: 11- MFE Pago a mixto con monto con decimales

Given ONCE-HABERES-voy a Obe y iniciamos sesion
When ONCE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo con monto con decimales
And  ONCE-HABERES-seleccionamos la fecha de pago y presionamos continuar
Then ONCE-HABERES-Nos envia a pantalla de confirmacion con los datos cargados en el archivo

@testHaberes
Scenario: 12- MFE Pago a Supervielle con monto con decimales

Given DOCE-HABERES-voy a Obe y iniciamos sesion
When DOCE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo con monto con decimales
And  DOCE-HABERES-seleccionamos la fecha de pago y presionamos continuar
Then DOCE-HABERES-Nos envia a pantalla de confirmacion con los datos cargados en el archivo

@testHaberes
Scenario: 13- MFE Validar archivo Descargar plantilla

Given TRECE-HABERES-voy a Obe y iniciamos sesion
When TRECE-HABERES-nos vamos a MFE Mediante Archivo
And  TRECE-HABERES-presionamos btn Descargar plantilla 
Then TRECE-HABERES-validamos la descarga del archivo 

@testHaberes
Scenario: 14- MFE pago a otros bancos sin monto

Given CATORCE-HABERES-voy a Obe y iniciamos sesion
When CATORCE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo sin monto
And  CATORCE-HABERES-seleccionamos la fecha de pago y presionamos continuar 
Then CATORCE-HABERES-Nos envia a pantalla de error 

@testHaberes
Scenario: 15- MFE pago mixto sin monto

Given QUINCE-HABERES-voy a Obe y iniciamos sesion
When QUINCE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo mixto sin monto
And  QUINCE-HABERES-seleccionamos la fecha de pago y presionamos continuar 
Then QUINCE-HABERES-Nos envia a pantalla de error 

@testHaberes
Scenario: 16- MFE pago supervielle sin monto

Given DIECISEIS-HABERES-voy a Obe y iniciamos sesion
When DIECISEIS-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo Supervielle sin monto
And  DIECISEIS-HABERES-seleccionamos la fecha de pago y presionamos continuar 
Then DIECISEIS-HABERES-Nos envia a pantalla de error 

@testHaberes
Scenario: 17- MFE pago supervielle con monto y con cero

Given DIECISIETE-HABERES-voy a Obe y iniciamos sesion
When DIECISIETE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo Supervielle
And  DIECISIETE-HABERES-seleccionamos la fecha de pago y presionamos continuar 
Then DIECISIETE-HABERES-Nos envia a pantalla de confirmacion con datos cargados

@testHaberes
Scenario: 18- MFE pago mixto con monto y con cero

Given DIECIOCHO-HABERES-voy a Obe y iniciamos sesion
When DIECIOCHO-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo mixto
And  DIECIOCHO-HABERES-seleccionamos la fecha de pago y presionamos continuar 
Then DIECIOCHO-HABERES-Nos envia a pantalla de confirmacion con datos cargados

@nuevo
Scenario: 19- MFE pago a otros bancos con monto y con cero

Given DIECINUEVE-HABERES-voy a Obe y iniciamos sesion
When DIECINUEVE-HABERES-nos vamos a MFE Mediante Archivo, cargamos archivo a otros bancos
And  DIECINUEVE-HABERES-seleccionamos la fecha de pago y presionamos continuar 
Then DIECINUEVE-HABERES-Nos envia a pantalla de confirmacion con datos cargados