import { TestBed } from '@angular/core/testing';

import { FormSignUpService } from './form-sign-up.service';

describe('FormSignUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormSignUpService = TestBed.get(FormSignUpService);
    expect(service).toBeTruthy();
  });
});
