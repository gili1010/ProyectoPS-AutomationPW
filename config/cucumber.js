// @ts-check
const { defineConfig, devices } = require('@playwright/test');

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
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
};
