import { TestBed, inject } from '@angular/core/testing';

import { SleepGoalsService } from './sleep-goals.service';

describe('SleepGoalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SleepGoalsService]
    });
  });

  it('should be created', inject([SleepGoalsService], (service: SleepGoalsService) => {
    expect(service).toBeTruthy();
  }));
});
