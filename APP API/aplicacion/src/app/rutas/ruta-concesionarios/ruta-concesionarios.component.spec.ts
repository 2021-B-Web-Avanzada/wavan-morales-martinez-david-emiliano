import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaConcesionariosComponent } from './ruta-concesionarios.component';

describe('RutaConcesionariosComponent', () => {
  let component: RutaConcesionariosComponent;
  let fixture: ComponentFixture<RutaConcesionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaConcesionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaConcesionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
