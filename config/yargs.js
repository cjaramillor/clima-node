const argv = require('yargs').options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad para obtener clima",
        demand: true
    }
}).argv




module.exports = {
    argv
}