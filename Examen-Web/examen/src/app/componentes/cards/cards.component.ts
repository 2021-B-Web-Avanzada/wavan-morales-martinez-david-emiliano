import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  arregloCards = [
    {
      icono:'<svg focusable="false" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 20a1 1 0 0 1 1-1h66a1 1 0 0 1 1 1v47a1 1 0 0 1-1 1H29.657a7 7 0 0 0-4.95 2.05l2.121 2.122-2.12-2.122L14 80.757V20z" stroke="currentcolor" stroke-width="6"></path><path stroke="currentcolor" stroke-width="6" stroke-linecap="round" d="M29 55h38M29 43h38M29 31h38"></path></svg>',
      titulo: 'Asistencia al cliente',
      texto: 'Estamos disponibles las veinticuatro horas de todos los días de la semana para ayudaros con vuestros problemas en los juegos, tiendas y cuentas.',
      texto2: '',
      link:'https://support.blizzard.com/help/'
    },
    {
      icono: '<svg focusable="false" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M47.91 56.668c4.78 0 8.656-3.93 8.656-8.777 0-4.848-3.875-8.777-8.656-8.777-4.78 0-8.656 3.93-8.656 8.777 0 4.848 3.876 8.777 8.656 8.777z" fill="currentcolor"></path><path d="M61.64 65.547a22.424 22.424 0 0 0 6.054-7.57 22.757 22.757 0 0 0 .485-19.023 22.471 22.471 0 0 0-5.66-7.878M33.468 30.84a22.444 22.444 0 0 0-5.824 7.935 22.738 22.738 0 0 0 .496 19.29 22.398 22.398 0 0 0 6.223 7.616M73.347 76.325a38.352 38.352 0 0 0 9.07-12.617 38.825 38.825 0 0 0 3.362-15.236 38.843 38.843 0 0 0-2.901-15.333 38.398 38.398 0 0 0-8.686-12.892M21.793 20.096a38.39 38.39 0 0 0-8.806 12.94 38.843 38.843 0 0 0-2.95 15.434A38.823 38.823 0 0 0 13.44 63.81a38.345 38.345 0 0 0 9.182 12.667" stroke="currentcolor" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round"></path></g><defs><clipPath id="a"><path fill="#fff" transform="translate(5.063 16.059)" d="M0 0h86.063v65.239H0z"></path></clipPath></defs></svg>',
      titulo: 'Contacto de prensa y medios de comunicación',
      texto: '¿Quieres notas de prensa, materiales o ponerte en contacto con nuestro equipo de relaciones públicas? Te ayudamos.',
      texto2: '',
      link:'http://blizzard.gamespress.com/'
    },
    {
      icono: '<svg focusable="false" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"><path d="M79.684 22.929H16.946c-3.353 0-6.072 2.878-6.072 6.428v42.857c0 3.55 2.719 6.429 6.072 6.429h62.738c3.353 0 6.072-2.878 6.072-6.429V29.357c0-3.55-2.719-6.428-6.072-6.428z" stroke-width="6"></path><path d="M48.315 61.521c5.6 0 10.14-4.806 10.14-10.735 0-5.93-4.54-10.736-10.14-10.736-5.6 0-10.14 4.806-10.14 10.736 0 5.929 4.54 10.735 10.14 10.735z" fill="currentcolor" stroke-width="4"></path><path d="M40.22 20.857v-2.143c0-1.705-.64-3.34-1.779-4.545-1.138-1.206-2.682-1.883-4.293-1.883h-4.047c-1.61 0-3.155.677-4.293 1.883-1.139 1.205-1.779 2.84-1.779 4.545v2.143" stroke-width="6"></path></g></svg>',
      titulo: 'Visitas',
      texto: '¡Conoced las oficinas de Blizzard en persona!',
      texto2: ' Email: tours@blizzard.com',
      link:'mailto:tours@blizzard.com'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
