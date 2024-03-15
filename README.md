# Automation Framework PLAYWRIGHT-CUCUMBER-ALLURE

# Table of content

You will find the following info on this README:

- About the project
- Upcoming features
- Build with
- Recommendations
- Project structure
- Getting started
- Prerequisites
- Installation
- Configuration
- Commands
- Reporting
- Lighthouse
- Docker

## Sobre el proyecto

El proyecto esta basado en Microsoft Playwright para end-to-end testing. Se implemento con cucumber y report allure. 


### Construido con

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)
- [Allure](https://www.npmjs.com/package/allure-playwright)
- [Cucumber](https://www.npmjs.com/package/@cucumber/playwright)


### Recomendaciones

IDE:
- Visual Studio Code

### Project structure

```
.
├── allure-reports
├── allure-results
├── Browser
│   ├── BrowserManager
├── config
│   ├── ambiente
│   ├── cucumber
│   ├── run-report
├── download
├── node_modules
├── src
│   ├── features
│   ├── hooks
│   │   ├── hooks.ts
│   ├── locators
│   └── page
│   │   ├── basePage.ts
│   └── test
│   │   ├── steps.ts
├── videos
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── reporte.js
└── README.md
```

## Inicio

Debes tener instalado

- NodeJS: 
```sh
  https://nodejs.org/en/download/
  ```
- Java 8 or higher: 
```sh
  https://www.java.com/es/download/
  ```

  ### Instalación

1. Clonar el repositorio

2. Instalar paquetes y dependencias
```sh
npm i
```

3. Onstalar Playwright:
```sh
npx playwright install
```

4. verificar la instalacion con:
```sh
npm run  test
```

## Configuración

1. Modificar ambiente, Tags, video y navegador `.env`

2. Ajustar valores de ambiente`./config/ambiente`


### Comandos

1. Run test con reporte
```bash
npm run test
```

2. run test con vista en consola
```bash
npm run cucumber
```

3. Generar reporte
```bash
npm run report
```

4. Abrir reporte 
```bash
npm run open
```

5. Generar codigo codegen
```bash
npm run code
```

6. para modificar el navegador:
```bash
npm run test --BROWSER="VALOR"
```

7. MODIFICAR TAGS:
```bash
npm run test --TAGS="@VALOR"
```

8. MODIFICAR AMBIENTE:
```bash
npm run test --AMBIENTE="VALOR"
```


## Reportes

- Allure report
- Screenshots, videos


# Credits

## Architect, creator and developer of this framework
```sd
    https://github.com/gili1010
```
