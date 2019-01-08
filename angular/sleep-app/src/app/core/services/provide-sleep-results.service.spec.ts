import { TestBed, inject } from '@angular/core/testing';

import { ProvideSleepResultsService } from './provide-sleep-results.service';

describe('ProvideSleepResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvideSleepResultsService]
    });
  });

  it('should be created', inject([ProvideSleepResultsService], (service: ProvideSleepResultsService) => {
    expect(service).toBeTruthy();
  }));
});
