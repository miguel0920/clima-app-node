const argv = require('./config/config').argv;
const axios = require('./lugar/lugar');
const axiosClima = require('./Clima/Clima');

//Ejemplo metodo ASYNC
const getInfo = async(direccion) => {
    try {
        const coordenadas = await axios.getLugarLatLng(direccion);
        const clima = await axiosClima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.lugar} es de ${clima}.`;
    } catch (error) {
        return `No se pudo determinar el clima ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

//Ejemplo metodo Normal
// axios.getLugarLatLng(argv.direccion)
//     .then(response => {
//         axiosClima.getClima(response.lat, response.lng)
//             .then(responseClima => console.log(`El clima de ${response.lugar} es de ${responseClima.main.temp}`))
//             .catch(errorClima => console.log(`No se pudo determinar el clima ${errorClima}`));
//     })
//     .catch(error => {
//         console.log(error);
//     });