import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAutosComponent } from './ruta-autos.component';

describe('RutaAutosComponent', () => {
  let component: RutaAutosComponent;
  let fixture: ComponentFixture<RutaAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
