//implementar paquete yarg para apoyo en comunicacion con la consola

const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de tablas de multiplicacion', opts)
    .help() //Habilita ayuda en la consola
    .argv;


module.exports = {
    argv //exportar la funcion
}