import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaJuegoComponent } from './portada-juego.component';

describe('PortadaJuegoComponent', () => {
  let component: PortadaJuegoComponent;
  let fixture: ComponentFixture<PortadaJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
