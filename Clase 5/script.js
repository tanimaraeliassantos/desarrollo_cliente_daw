document.addEventListener('DOMContentLoaded', function (event) {
	const sectionPrincipal = document.getElementById('principal');

	const divP = document.createElement('div');
	divP.classList.add('contenedor');

	const parrafo1 = document.createElement('p');
	parrafo1.classList.add('parrafo');
	parrafo1.innerHTML = 'Esto es un parrafo';

	divP.append(parrafo1);

	const btn_1 = document.createElement('button');
	const btn_2 = document.createElement('button');
	const btn_3 = document.createElement('button');

	btn_1.classList.add('btn');
	btn_2.classList.add('btn');
	btn_3.classList.add('btn');

	btn_1.innerText = 'Clic botón 1';
	btn_2.innerText = 'Clic botón 2';
	btn_3.innerText = 'Clic botón 3';

	divP.append(btn_1, btn_2, btn_3);

	btn_1.addEventListener('click', function (event) {
		alert('Botón 1 pulsado :)');
	});

	btn_2.addEventListener('click', function (event) {
		alert('Botón 2 pulsado :)');
	});

	btn_3.addEventListener('click', function (event) {
		alert('Botón 3 pulsado :)');
	});

	sectionPrincipal.append(divP);
});
