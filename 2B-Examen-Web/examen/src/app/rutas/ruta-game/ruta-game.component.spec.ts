import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGameComponent } from './ruta-game.component';

describe('RutaGameComponent', () => {
  let component: RutaGameComponent;
  let fixture: ComponentFixture<RutaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
