import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaConcesionariosEditarComponent } from './ruta-concesionarios-editar.component';

describe('RutaConcesionariosEditarComponent', () => {
  let component: RutaConcesionariosEditarComponent;
  let fixture: ComponentFixture<RutaConcesionariosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaConcesionariosEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaConcesionariosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
