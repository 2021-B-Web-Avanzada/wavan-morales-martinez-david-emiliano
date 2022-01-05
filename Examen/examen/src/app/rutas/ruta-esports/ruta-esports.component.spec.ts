import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEsportsComponent } from './ruta-esports.component';

describe('RutaEsportsComponent', () => {
  let component: RutaEsportsComponent;
  let fixture: ComponentFixture<RutaEsportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEsportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEsportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
