import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAsistenciaComponent } from './ruta-asistencia.component';

describe('RutaAsistenciaComponent', () => {
  let component: RutaAsistenciaComponent;
  let fixture: ComponentFixture<RutaAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaAsistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
