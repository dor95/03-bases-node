const opts = {
	base: {
		demand: true
		, alias: 'b'
	}
	, limite: {
		alias: 'l'
		, default: 10
	}
};
const argv = require('yargs')
	.command('listar', 'Imprime en pantalla una tabla de multiplicar', opts)
	.command('crear', 'Crea un archivo con la tabla de multiplicar',opts);
module.exports={
	argv
}