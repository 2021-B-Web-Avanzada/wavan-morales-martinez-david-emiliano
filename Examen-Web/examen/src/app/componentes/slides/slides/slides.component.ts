import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  arregloSlides = [
    {
      picture: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt019a41fb250fc116/5f2dd6b64eebe153cbb0921b/careers-3.webp?auto=webp&format=pjpg',
    },
    {
      picture: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt0e136100d434095e/5f2dd6b7bb238f5556376fb0/careers-4.webp?auto=webp&format=pjpg',
    },
    {
      picture: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltd71afaa448dc225a/5f2dd6b6b7dcf5546ea924da/careers-1.webp?auto=webp&format=pjpg',
    },
    {
      picture: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt619face5f4b56262/5f2dd6b68ea4aa55f2329d4f/careers-2.webp?auto=webp&format=pjpg',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
