import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

class EnvironmentConfig {
    private static readonly TESTING_URL: string = 'https://demo.guru99.com/test/newtours/';
    private static readonly DESA_URL: string = 'https://demo.guru99.com/test/newtours/';

    private static readonly TESTING_USER: string = 'usuario';
    private static readonly TESTING_PASSWORD: string = 'pass';

    private static readonly DESA_USER: string = 'usuario';
    private static readonly DESA_PASSWORD: string = 'pass';

    // Método estático para obtener la URL en función de la variable de entorno
    public static getUrl(): {url: string, user: string, password: string } {
        const ambiente: string | undefined = process.env.npm_config_AMBIENTE;
        if (ambiente && ambiente.toUpperCase() === 'TESTING') {
            return {
                url: this.TESTING_URL,
                user: this.TESTING_USER,
                password: this.TESTING_PASSWORD
            };
        } else {
            return {
                url: this.DESA_URL,
                user: this.DESA_USER,
                password: this.DESA_PASSWORD
            };
        }
    }
}
// Exporta la clase EnvironmentConfig
export default EnvironmentConfig;
