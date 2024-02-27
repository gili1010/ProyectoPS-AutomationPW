import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

class EnvironmentConfig {
    private static readonly TESTING_URL: string = 'www.testing.com';
    private static readonly DESA_URL: string = 'www.desa.com';

    // Método estático para obtener la URL en función de la variable de entorno
    public static getUrl(): string {
        const ambiente: string | undefined = process.env.npm_config_AMBIENTE;
        if (ambiente && ambiente.toUpperCase() === 'TESTING') {
            return this.TESTING_URL;
        } else {
            return this.DESA_URL;
        }
    }
}

// Exporta la clase EnvironmentConfig
export default EnvironmentConfig;
