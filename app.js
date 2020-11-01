const {argv} = require('./config/yags').argv;
const colors = require('colors/safe');
const { crearArchivo, generarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
/* console.log(base);
console.log(limite); */
switch (comando) {
	case 'listar':
			console.log("Listar");
			generarTabla(base,limite).then(tabla=>{console.log(tabla);})
			.catch(e=>{console.log(e);});
		break;
	case 'crear':
			console.log("Crear");
			crearArchivo(base,limite)
			.then(msg=>{
				console.log('Archivo creado:', colors.green(`${msg}`));
			})
			.catch(e=>{
				console.log(e);
			});
		break;
	default:
			console.log("Comando no reconocido");
		break;
}

// console.log(argv.limite);


/* tabla(3);
tabla(4);
tabla(5);
tabla(6); */