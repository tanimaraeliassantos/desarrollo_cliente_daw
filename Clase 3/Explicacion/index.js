function mostrarMensajeExterno() {
	alert('Esta es la mejor opción documento JS externo');
}

let n = 1;

function mostrarMensajeExterno2() {
	alert('Esta es la mejor opción documento JS externo DOS ' + n);
	n++;
}

function clickParImpar() {
	if (n % 2 == 0) {
		alert('CLICK PAR: ' + n);
	} else {
		alert('CLICK IMPAR: ' + n);
	}
}
