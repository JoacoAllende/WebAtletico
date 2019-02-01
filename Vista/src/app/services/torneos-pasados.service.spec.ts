import { TestBed } from '@angular/core/testing';

import { TorneosPasadosService } from './torneos-pasados.service';

describe('TorneosPasadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TorneosPasadosService = TestBed.get(TorneosPasadosService);
    expect(service).toBeTruthy();
  });
});
