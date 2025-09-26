function mostrarMensajeExterno() {
	alert('Esta es la mejor opción documento JS externo');
}

let n = 0;

function mostrarMensajeExterno2() {
	n++;
	alert('Esta es la mejor opción documento JS externo DOS ' + n);
}

function clickParImpar() {
	if (n % 2 == 0) {
		alert('CLICK PAR: ' + n);
	} else {
		alert('CLICK IMPAR: ' + n);
	}
}
