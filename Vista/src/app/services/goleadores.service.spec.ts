import { TestBed } from '@angular/core/testing';

import { GoleadoresService } from './goleadores.service';

describe('GoleadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoleadoresService = TestBed.get(GoleadoresService);
    expect(service).toBeTruthy();
  });
});
