@api
@allure.label.suite:Api-Nominas
@allure.label.owner=Luciano_Gili
Feature: Pruebas

@apinuevo
Scenario: 01-consultar Pokemon

Given UNO-NOMINA-Consultamos la api de pokeapi
When UNO-NOMINA-le pasamos el id solicitado
Then UNO-NOMINA-Obtenemos los datos del id solicitado