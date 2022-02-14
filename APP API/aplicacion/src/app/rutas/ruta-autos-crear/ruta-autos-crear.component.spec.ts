import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAutosCrearComponent } from './ruta-autos-crear.component';

describe('RutaAutosCrearComponent', () => {
  let component: RutaAutosCrearComponent;
  let fixture: ComponentFixture<RutaAutosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaAutosCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAutosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
