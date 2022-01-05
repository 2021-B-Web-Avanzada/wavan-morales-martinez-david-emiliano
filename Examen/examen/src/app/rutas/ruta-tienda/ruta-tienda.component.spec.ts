import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaTiendaComponent } from './ruta-tienda.component';

describe('RutaTiendaComponent', () => {
  let component: RutaTiendaComponent;
  let fixture: ComponentFixture<RutaTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
