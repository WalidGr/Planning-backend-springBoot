import { TestBed } from '@angular/core/testing';

import { PlanchargementService } from './planchargement.service';

describe('PlanchargementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanchargementService = TestBed.get(PlanchargementService);
    expect(service).toBeTruthy();
  });
});
