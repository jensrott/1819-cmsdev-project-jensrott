import { TestBed, inject } from '@angular/core/testing';

import { MemesService } from './memes.service';

describe('MemesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemesService]
    });
  });

  it('should be created', inject([MemesService], (service: MemesService) => {
    expect(service).toBeTruthy();
  }));
});
