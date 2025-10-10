document.addEventListener(('DOMContentLoaded', () => {
	const form = document.getElementById('miFormulario');
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');

    form.addEventListener("submit", () => {
        if(nombre.value.length < 3) {
            alert("El nombre tiene que tener al menos 3 caracteres")
            return;
        }
    })
  
}))
