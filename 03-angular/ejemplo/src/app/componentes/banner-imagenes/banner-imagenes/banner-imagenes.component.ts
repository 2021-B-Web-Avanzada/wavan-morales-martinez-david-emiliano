import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {
  nombre = 'David';
  apellido = 'Morales';
  mascotas = {
    teo: {
      edad: 9
    }
  }
  fecha = new Date;
  sueldo = 1000;

  @Input()
  url = 'https://www.google.com';
  @Input()
  urlImagen = 'https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg';
  @Input()
  color = 'yellow';

  constructor() { }

  ngOnInit(): void {
  }

  ejecutarEventoClick(){
    console.log({mensaje: "Click"})
  }
  ejecutarEventoBlur(){
    console.log({mensaje: "Blur"})
  }

}
