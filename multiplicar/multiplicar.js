const fs = require('fs');
let generarTabla = (base, limite) => {
	return new Promise((resolve,reject)=>{
		if (!Number(base))
			return reject('No es un número');
		let data = '';
		for (let index = 1; index <= limite; index++) {
			data += `${base} * ${index} = ${base * index}\n`
		}
		return resolve(data);
	});
};
let escribirArchivo = (file,data)=>{
	return new Promise((resolve,reject)=>{
		fs.writeFile(file, data, (err) => {
			if (err) return reject( err );
			return resolve(file);
		});
	});
};
let crearArchivo = async (base,limite) => {
		let data = await generarTabla(base,limite);
		return escribirArchivo(`tabla-${base}.txt`,data);
};
module.exports = {
	crearArchivo
	, generarTabla
};