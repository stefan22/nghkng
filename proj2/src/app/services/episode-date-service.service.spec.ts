import { TestBed, inject } from '@angular/core/testing';

import { EpisodeDateServiceService } from './episode-date-service.service';

describe('EpisodeDateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpisodeDateServiceService]
    });
  });

  it('should be created', inject([EpisodeDateServiceService], (service: EpisodeDateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
