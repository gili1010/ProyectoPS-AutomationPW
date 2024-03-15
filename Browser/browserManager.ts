import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

// Ruta a la carpeta de descargas
const downloadsFolder = './downloads';

const options: LaunchOptions = {
    headless: !true,
    slowMo:300,
}

export const invokeBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Please set the proper browser!")
    }

}