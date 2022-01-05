import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCuentaComponent } from './ruta-cuenta.component';

describe('RutaCuentaComponent', () => {
  let component: RutaCuentaComponent;
  let fixture: ComponentFixture<RutaCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
