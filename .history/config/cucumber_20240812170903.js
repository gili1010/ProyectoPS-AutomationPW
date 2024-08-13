// @ts-check
const { devices } = require('@playwright/test');
const dotenv = require('dotenv');
// Cargar variables de entorno del archivo .env
dotenv.config();

module.exports = {
    
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
            timeout: 80000,
        },
        {
            name: 'Microsoft Edge',
            use: { ...devices['Desktop Edge'], channel: 'msedge' },
        },
        {
            name: 'Google Chrome',
             use: { ...devices['Desktop Chrome'], channel: 'chrome' },
         },
    ],
    default: {
        tags: process.env.npm_config_TAGS || "@nuevo",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/features/"
        ],
        require: [
            "src/test/steps/*.ts",
            "src/test/steps/*.ts",
            "src/test/steps/apis/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
};

