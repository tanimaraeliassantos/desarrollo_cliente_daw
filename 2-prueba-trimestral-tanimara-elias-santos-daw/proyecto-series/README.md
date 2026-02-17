## Gestor de Series App

Pequeña aplicación desarrollada con Angular 18 para gestionar catálogo de series consumiendo una API externa.

## Características

Listado de Series: Visualización de todas las series disponibles en una tabla dinámica.

Registro de Series: Formulario reactivo para añadir nuevas series con validaciones en tiempo real.

Navegación SPA: Sistema de rutas sin recarga de página (Single Page Application).

Control Flow: Uso de la nueva sintaxis @if y @for de Angular.

## Tecnologías utilizadas

Angular 18

TypeScript

Servicios e Inyección de Dependencias (HttpClient e inject)

Formularios Reactivos (FormBuilder y Validators)

## Estructura del proyecto

src/app/layout: Componentes globales (Header y Footer).

src/app/pages: Vistas principales (Home y New).

src/app/services: Lógica de conexión con la API (peticiones.online).

src/app/app.routes.ts: Definición de la navegación.

## Instalación y ejecución

Clonar el repositorio.

Instalar dependencias:

npm install

Ejecutar el servidor de desarrollo:

ng serve

Abrir en el navegador: http://localhost:4200

Desarrollado como parte de la práctica de Angular.
