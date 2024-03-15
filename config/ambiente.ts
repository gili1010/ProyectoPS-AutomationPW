import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

class EnvironmentConfig {
    private static readonly TESTING_URL: string = 'https://empresastst.supervielle.com.ar/obe/login';
    private static readonly DESA_URL: string = 'http://obe-demo.gscorp.ad:8008/obe/login';

    private static readonly TESTING_USER: string = 'usuariodiaPS';
    private static readonly TESTING_PASSWORD: string = 'Info1010';

    private static readonly DESA_USER: string = 'Gaston082';
    private static readonly DESA_PASSWORD: string = 'Info1010';

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
