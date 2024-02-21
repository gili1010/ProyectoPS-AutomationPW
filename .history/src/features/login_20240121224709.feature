@nominas
Feature: Pruebas


@prueba
Scenario: ingreso

Given User navigates to the application
And User enter the username as "ortoni11"
And User enter the password as "Pass1234"
When User click on the login button
Then Login should be success

@test
Scenario: Login Incorrecto

Given DOS-User navigates to the application
When DOS-User click on the login button
Then DOS-Login should be success