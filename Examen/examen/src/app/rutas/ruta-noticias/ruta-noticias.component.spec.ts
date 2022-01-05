import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNoticiasComponent } from './ruta-noticias.component';

describe('RutaNoticiasComponent', () => {
  let component: RutaNoticiasComponent;
  let fixture: ComponentFixture<RutaNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
