import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaJuegosComponent } from './ruta-juegos.component';

describe('RutaJuegosComponent', () => {
  let component: RutaJuegosComponent;
  let fixture: ComponentFixture<RutaJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
