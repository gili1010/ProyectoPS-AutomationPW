@nominas
Feature: Pruebas


@nuevo
Scenario: 01-Ingresar a DemoGuru con usuario y contraseña correcta
Given vamos a DemoGuru
When completamos "admin" y "admin" correcta
Then nos permite el ingreso al panel y nos da mensaje de biemvenida

@nuevo
Scenario: 02-Ingresar a DemoGuru con usuario y contraseña Incorrecta
Given vamos a DemoGuru Home
When completamos "fghfdhgf" y "fghfdhgf" incorrecta
Then  No nos permite el ingreso al panel y nos da mensaje de error