import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAutosEditarComponent } from './ruta-autos-editar.component';

describe('RutaAutosEditarComponent', () => {
  let component: RutaAutosEditarComponent;
  let fixture: ComponentFixture<RutaAutosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaAutosEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAutosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
