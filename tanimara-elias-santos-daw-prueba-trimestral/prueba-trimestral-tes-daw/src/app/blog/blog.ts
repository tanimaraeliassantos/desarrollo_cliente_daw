import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Noticia {
  titulo: string;
  imagen: string;
  texto: string;
  fecha: string;
}

type InputRef = HTMLInputElement | HTMLTextAreaElement;

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  noticias: Noticia[] = [
    {
      titulo: 'Lucie Cerna (OCDE): “Repetir curso es muy caro y al alumno no le suele funcionar”',
      imagen:
        'https://imagenes.elpais.com/resizer/v2/AKE63SXYZFHK3BQP7IJZGRAKQA.jpg?auth=255135bc5da21c37ff621edaa3c3f0e72bda13bd89d36c485fbc60995dd54e69&width=1200',
      texto:
        'La analista de equidad educativa de la organización de países desarrollados defiende que las escuelas colaboren con los servicios sociales y de salud mental',
      fecha: '18-11-2025',
    },
    {
      titulo:
        'Una hormiga parásita altera la mente de las obreras para que maten a su madre y convertirse en la nueva soberana',
      imagen:
        'https://imagenes.elpais.com/resizer/v2/ULQYRIIJDFDMBLKQDUNRQPZKYA.JPG?auth=b671beef33e759be9ef6d19e7e0cfaea25b1c7c3cac54e78f66a14fd159d88f6&width=828&height=466&smart=true',
      texto:
        'El equipo de investigadores descubrió que la reina invasora, al engañar a las hijas con una sustancia química, desencadena el matricidio dentro del nido',
      fecha: '17-11-2025',
    },
  ];

  mensajeError: string = '';

  publicar(
    event: Event,
    tituloInput: InputRef,
    imagenInput: InputRef,
    textoInput: InputRef,
    fechaInput: InputRef
  ) {
    event.preventDefault();

    const titulo = tituloInput.value.trim();
    const imagen = imagenInput.value.trim();
    const texto = textoInput.value.trim();
    const fecha = fechaInput.value.trim();

    if (!titulo || !imagen || !texto || !fecha) {
      this.mensajeError = 'Todos los campos son obligatorios.';
      return;
    }

    this.mensajeError = '';
    const nuevo: Noticia = { titulo, imagen, texto, fecha };
    this.noticias.unshift(nuevo);

    tituloInput.value = '';
    imagenInput.value = '';
    textoInput.value = '';
    fechaInput.value = '';
  }
}
