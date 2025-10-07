let promesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('se resuelve la promesa después de 3 segundos');
	}, 3000);
});

promesa
	.then((msg) => {
		console.log(msg);
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => {
		console.log('Siempre se ejecuta');
	});


    console.log("Ejecución normal")