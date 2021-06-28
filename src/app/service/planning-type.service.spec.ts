import { TestBed } from '@angular/core/testing';

import { PlanningTypeService } from './planning-type.service';

describe('PlanningTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanningTypeService = TestBed.get(PlanningTypeService);
    expect(service).toBeTruthy();
  });
});
