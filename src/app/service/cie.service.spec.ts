import { TestBed } from '@angular/core/testing';

import { CieService } from './cie.service';

describe('CieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CieService = TestBed.get(CieService);
    expect(service).toBeTruthy();
  });
});
