import { Component, signal } from '@angular/core';

interface Juego{
  titulo: string;
  imagen: string;
  plataforma: string;
  anio: number;
}
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('formulario-juegos');
  juegps: Juego[] = [
    {
    "titulo": "The Legend of Zelda: Breath of the Wild",
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdCCf52ocVBNdW7F6fc7pjxlLCS10M9z26dc5ZMRs9Xj0UCFeiOzD0fYmFzkOIyt2x_EJmsMjFK6XEQc07KXs4fTPh3UMP5RQDxZTOGHP&s=10",
    "plataforma": "Nintendo Switch",
    "anio": 2017
  },
  {
    "titulo": "The Witcher 3: Wild Hunt",
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwMuMzukse-mix7kiZq8lF7H_AfARXgM8flKLx86oX-x9NvR-HOHJuUhZKG76fvFGuXKSVo_VeFxrFY7Oug-hjEiwl45206UCV-OOkZnRqg&s=10",
    "plataforma": "PC",
    "anio": 2015
  },
  {
    "titulo": "God of War",
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfC--VdCcM3qSmg2kkWntBIKWdsyX8fvrZgESWj0ag2tFK2A21lFb8eSNqAjWekarAyxOMAR_hxSYs0r9Vn6lcpPGR2Ef3emWJHOYWWTI&s=10",
    "plataforma": "PlayStation 4",
    "anio": 2018
  }
  ];

  }

