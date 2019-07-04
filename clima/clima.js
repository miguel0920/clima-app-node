const axios = require('axios');

const getClima = async(lat, long) => {

    const clima = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e4f97ee78623d50954a30be774775504&units=metric`)

    return clima.data.main.temp;
};

module.exports = {
    getClima
}