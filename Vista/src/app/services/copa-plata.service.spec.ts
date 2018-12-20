import { TestBed } from '@angular/core/testing';

import { CopaPlataService } from './copa-plata.service';

describe('CopaPlataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CopaPlataService = TestBed.get(CopaPlataService);
    expect(service).toBeTruthy();
  });
});
