@nominas
@allure.label.suite:Nominas
@allure.label.owner=Luciano_Gili
Feature: Pruebas
Nominas

@test
Scenario: 01-Seleccionar suc 2 alta cuenta Sueldo
Given voy a Obe y iniciamos sesion
When nos vamos a Alta Cuenta Sueldo y seleccionamos suc "2"
Then Obtenemos la sucursal "2" elegida

@test
Scenario: 02-Validar Alta sin seleccionar Suc

Given DOS-voy a Obe y iniciamos sesion
When DOS-nos vamos a Alta Cuenta Sueldo y damos clic a Validar
Then DOS-Obtenemos el mensaje Seleccione una sucursal de la lista

@test
Scenario: 03-Validar datos MFE Alta Nomina

Given TRES-voy a Obe y iniciamos sesion
When TRES-nos vamos al nuevo MFE Alta Cuenta Sueldo
Then TRES-Obtenemos la vista del nuevo MFE 

@test
Scenario: 04- MFE Alta Nomina Btn Cerrar

Given CUATRO-voy a Obe y iniciamos sesion
When CUATRO-nos vamos a MFE Alta Cuenta Sueldo, presionamos cerrar
Then CUATRO-Volvemos a la vista de inicio  

@test
Scenario: 05- MFE Alta Nomina mediante archivo-validar datos

Given CINCO-voy a Obe y iniciamos sesion
When CINCO-nos vamos a MFE Alta Cuenta Sueldo, mediante archivo
Then CINCO-Validamos los datos de pantalla 

@test
Scenario: 06- MFE Alta Nomina mediante archivo

Given SEIS-voy a Obe y iniciamos sesion
When SEIS-nos vamos a MFE Alta Cuenta Sueldo, mediante archivo
And SEIS-seleciionamos suc, sector y cargamos archivo
Then SEIS-Nos genera un alta de lote

@test
Scenario: 07- MFE Alta Nomina mediante archivo Invalido

Given SIETE-voy a Obe y iniciamos sesion
When SIETE-nos vamos a MFE Alta Cuenta Sueldo, mediante archivo
And SIETE-seleciionamos suc, sector y cargamos archivo incorrecto
Then SIETE-Nos genera un error El archivo seleccionado no tiene la extensión permitida