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
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt3f643e0faaaecab1/5fb41cbe8acca34834e6456c/game-card_overwatch_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://playoverwatch.com/',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt62f9e7c9f3df274f/5fb3f4d021b96a46dc51a801/game-card_wow_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://worldofwarcraft.com/',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt4b4b9263a566ff5e/5fb41cd8a9e913483b74d3ce/game-card_hearthstone_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://playhearthstone.com',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt55a2fba3e9870454/5fb41cec0b0a825636795d7e/game-card_heroes_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://heroesofthestorm.com/',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt3944d4fd71a0e8eb/5f2c6dd3bb238f5556376cb7/game-card-wc3-en-us.webp?auto=webp&format=pjpg");',
      link: 'https://playwarcraft3.com/',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt0822535a98171e01/5fb41d8eae5aee5796129469/game-card_diablo4_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://diablo4.blizzard.com/',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltf4c165ccd84e9b0f/603edef6ee3eea3d58383127/game-card_diabloimmortal_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://diabloimmortal.com/',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt94e0a09b416fd884/5fb41cff0b0a825636795d80/game-card_diablo3_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://diablo3.com/',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt1edc7ce558cc989a/5fb41d139fbb9857903d97b8/game-card_starcraft2_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://starcraft2.com/',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blte677f2b86d3185d1/5fb41be221b96a46dc51a837/game-card_starcraft_enUS.webp?auto=webp&format=pjpg");',
      link: 'https://starcraft.com/',
    },
    {
      imagen: 'background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltaa82a64a6629e7c6/6022e122c484333be943d8dd/rtro-game-card.webp?auto=webp&format=pjpg");',
      link: 'https://news.blizzard.com/es-es/blizzard/23617535/',
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
