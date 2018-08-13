import { TestBed, inject } from '@angular/core/testing';

import { CastDataService } from './cast-data.service';

describe('CastDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CastDataService]
    });
  });

  it('should be created', inject([CastDataService], (service: CastDataService) => {
    expect(service).toBeTruthy();
  }));
});
