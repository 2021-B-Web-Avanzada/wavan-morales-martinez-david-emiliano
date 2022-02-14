import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaConcesionariosCrearComponent } from './ruta-concesionarios-crear.component';

describe('RutaConcesionariosCrearComponent', () => {
  let component: RutaConcesionariosCrearComponent;
  let fixture: ComponentFixture<RutaConcesionariosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaConcesionariosCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaConcesionariosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
