import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConcesionarioComponent } from './card-concesionario.component';

describe('CardConcesionarioComponent', () => {
  let component: CardConcesionarioComponent;
  let fixture: ComponentFixture<CardConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardConcesionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
