import { TestBed } from '@angular/core/testing';

import { CopaOroService } from './copa-oro.service';

describe('CopaOroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CopaOroService = TestBed.get(CopaOroService);
    expect(service).toBeTruthy();
  });
});
