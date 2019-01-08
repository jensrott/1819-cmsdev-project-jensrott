import { TestBed, inject } from '@angular/core/testing';

import { TipsToolsService } from './tips-tools.service';

describe('ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipsToolsService]
    });
  });

  it('should be created', inject([TipsToolsService], (service: TipsToolsService) => {
    expect(service).toBeTruthy();
  }));
});
