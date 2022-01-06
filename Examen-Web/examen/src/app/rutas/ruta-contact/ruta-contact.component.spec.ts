import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaContactComponent } from './ruta-contact.component';

describe('RutaContactComponent', () => {
  let component: RutaContactComponent;
  let fixture: ComponentFixture<RutaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
