import { Given, When, Then} from '@cucumber/cucumber';
import { ApiService } from '../../../page/ApiService';

let response:any
let respuestaJSON: any
const apiService = new ApiService(`https://pokeapi.co/api/v2`);
  
  Given('UNO-NOMINA-Consultamos la api de pokeapi', async function () {
    response = await apiService.get('pokemon/pikachu');
  });

  When('UNO-NOMINA-le pasamos el id solicitado', async function () {
    const dataResponse = {
        status: response.status,
        data: response.data.species,
    };
    // Convierte la respuesta a JSON
    respuestaJSON = await JSON.stringify(dataResponse);

    console.log(respuestaJSON);
  });

  Then('UNO-NOMINA-Obtenemos los datos del id solicitado', async function () {
  // Adjunta el JSON al reporte de Allure
  this.attach(respuestaJSON, "application/json");
  });