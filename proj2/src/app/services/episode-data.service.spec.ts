import { TestBed, inject } from '@angular/core/testing';

import { EpisodeDataService } from './episode-data.service';

describe('EpisodeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpisodeDataService]
    });
  });

  it('should be created', inject([EpisodeDataService], (service: EpisodeDataService) => {
    expect(service).toBeTruthy();
  }));
});
