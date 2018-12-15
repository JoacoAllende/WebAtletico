import { TestBed } from '@angular/core/testing';

import { OctavosOroService } from './octavos-oro.service';

describe('OctavosOroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OctavosOroService = TestBed.get(OctavosOroService);
    expect(service).toBeTruthy();
  });
});
