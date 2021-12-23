import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = true;

  arregloUsuarios = [
    {
      id:1,
      nombre: 'David',
      color: '#0A4AFF',
      link:'https://es-la-facebook.com',
      linkImagen:'https://cloudfront-us-east-1.images.arcpublishing.com/semana/V3EVP6ZUEZFY7AIGESM76I43GE.jpg'
    },
    {
      id:2,
      nombre: 'Emiliano',
      color: '#AB7A00',
      link:'https://epn.edu.ec',
      linkImagen:'https://upload.wikimedia.org/wikipedia/fi/2/28/Donkey_Kong.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }
}
