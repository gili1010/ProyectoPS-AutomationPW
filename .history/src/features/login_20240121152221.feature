Feature: Pruebas

  Scenario: ingreso

@prueba
Given User navigates to the application
And User enter the username as "ortoni11"
And User enter the password as "Pass1234"
When User click on the login button
Then Login should be success