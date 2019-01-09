import { TestBed } from '@angular/core/testing';

import { ActualizarGoleadoresService } from './actualizar-goleadores.service';

describe('ActualizarGoleadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActualizarGoleadoresService = TestBed.get(ActualizarGoleadoresService);
    expect(service).toBeTruthy();
  });
});
