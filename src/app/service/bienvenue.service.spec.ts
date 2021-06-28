import { TestBed } from '@angular/core/testing';

import { BienvenueService } from './bienvenue.service';

describe('BienvenueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BienvenueService = TestBed.get(BienvenueService);
    expect(service).toBeTruthy();
  });
});
