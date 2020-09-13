const argv = require('./config/yargs').argv;
const lugar = require('./clima/lugar');

let command = argv.direccion;
if (command) {
    lugar.getLugar(command)
        .then((location) => {
            lugar.getClima(location.lat_data, location.long_data)
                .then((weather) => {
                    console.log(`La temperatura de ${location.lugar_data} es de ${weather.temperatura}°`);
                })
                .catch(errClima => {
                    console.log(errClima);
                });
        })
        .catch(err => {
            console.log(`No esposible determinar la temperatura para ${command}`);
        });
}