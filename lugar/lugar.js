const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const direccionUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionUrl}`,
        headers: { 'X-RapidAPI-Key': '827806cf85msh42ca63c847004efp15eff4jsneb6679d496b0' }
    });

    const response = await instance.get();
    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados en la ciudad ${direccion}`);
    } else {
        const data = response.data.Results[0];
        const lugar = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {
            lugar,
            lat,
            lng
        };
    }
};

module.exports = {
    getLugarLatLng
};