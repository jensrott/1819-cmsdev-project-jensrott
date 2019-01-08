import { TestBed, inject } from '@angular/core/testing';

import { PhotosCompetitionService } from './photos-competition.service';

describe('PhotosCompetitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosCompetitionService]
    });
  });

  it('should be created', inject([PhotosCompetitionService], (service: PhotosCompetitionService) => {
    expect(service).toBeTruthy();
  }));
});
