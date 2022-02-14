import { TestBed } from '@angular/core/testing';

import { AutoJphService } from './auto-jph.service';

describe('AutoJphService', () => {
  let service: AutoJphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoJphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
