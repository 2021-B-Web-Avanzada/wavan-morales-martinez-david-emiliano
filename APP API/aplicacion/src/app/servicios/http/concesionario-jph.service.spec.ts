import { TestBed } from '@angular/core/testing';

import { ConcesionarioJphService } from './concesionario-jph.service';

describe('ConcesionarioJphService', () => {
  let service: ConcesionarioJphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcesionarioJphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
