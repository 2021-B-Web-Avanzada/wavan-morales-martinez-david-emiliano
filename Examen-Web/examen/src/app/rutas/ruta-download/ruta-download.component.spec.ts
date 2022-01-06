import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDownloadComponent } from './ruta-download.component';

describe('RutaDownloadComponent', () => {
  let component: RutaDownloadComponent;
  let fixture: ComponentFixture<RutaDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
