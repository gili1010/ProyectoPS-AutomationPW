const { execSync } = require('child_process');
const fs = require('fs');

// Leer las variables del archivo .env
require('dotenv').config();
const browser = process.env.npm_config_BROWSER || 'chrome';
const tags = process.env.npm_config_TAGS || '@nuevo';
const ambiente = process.env.npm_config_AMBIENTE || 'TESTING';
const time = process.env.npm_config_TIME || '40000';
const video = process.env.npm_config_VIDEO || 'FALSE';

// Crear o actualizar el archivo environment.properties
const data = `BROWSER=${browser}\nTAGS=${tags}\nAMBIENTE=${ambiente}\nTIME=${time}\nVIDEO=${video}\n`;
fs.writeFileSync('./allure-results/environment.properties', data);

// Ejecutar las pruebas y generar los resultados de Allure
execSync('allure generate allure-results -o allure-report --clean', { stdio: 'inherit' });
