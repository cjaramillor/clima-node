const axios = require('axios');
//apikey de la api de openweather
const apikey = "75915c523cd600436346e9934692d8f1"

const getLugar = async(lugar) => {
    //creamos una instancia de la llamada de la url
    let encodeLugar = encodeURI(lugar);
    let instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeLugar}&APPID=${apikey}`
    })

    //promise del resultado de la consulta a la api geografica
    const data = await instance.get();

    if (data.cod == 400) {
        throw new Error(`Sin resultados para ${lugar}`);
    }

    const lugar_data = data.data.name;
    const lat_data = data.data.coord.lat;
    const long_data = data.data.coord.lon;

    return {
        lugar_data,
        lat_data,
        long_data
    }

}

const getClima = async(lat, lon) => {

    let instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
    })

    //promise del resultado de la consulta a la api de clima
    const clima = await instance.get();

    if (clima.cod == 400) {
        throw new Error(`Error peticion API clima`);
    }

    const temperatura = clima.data.main.temp;

    return {
        temperatura
    }

}



module.exports = {
    getLugar,
    getClima
}