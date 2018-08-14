import { TestBed, inject } from '@angular/core/testing';

import { WalkingRoutesDataService } from './walking-routes-data.service';

describe('WalkingRoutesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WalkingRoutesDataService]
    });
  });

  it('should be created', inject([WalkingRoutesDataService], (service: WalkingRoutesDataService) => {
    expect(service).toBeTruthy();
  }));
});
