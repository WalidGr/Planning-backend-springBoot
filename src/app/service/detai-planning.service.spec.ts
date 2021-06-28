import { TestBed } from '@angular/core/testing';

import { DetaiPlanningService } from './detai-planning.service';

describe('DetaiPlanningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetaiPlanningService = TestBed.get(DetaiPlanningService);
    expect(service).toBeTruthy();
  });
});
