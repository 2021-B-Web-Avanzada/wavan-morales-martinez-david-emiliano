import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  arregloPosters = [
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltba6467bcebcc23c1/6022e122c6713d4e7a4d4419/fenway-game-card.webp?auto=webp&format=pjpg");',
      link: 'https://diablo2.blizzard.com',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltcdaa7ff86edaacf0/5fb3dfef21b96a46dc51a7fb/game-card_overwatch2_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://blizzcon.playoverwatch.com',
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
