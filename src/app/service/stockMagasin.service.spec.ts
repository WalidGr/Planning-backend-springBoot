import { TestBed } from '@angular/core/testing';

import { StockMagasinService } from './stockMagasin.service';

describe('StockMagasinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockMagasinService = TestBed.get(StockMagasinService);
    expect(service).toBeTruthy();
  });
});
