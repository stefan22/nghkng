import { TestBed, inject } from '@angular/core/testing';

import { WalkingARouteDataService } from './walking-a-route-data.service';

describe('WalkingARouteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WalkingARouteDataService]
    });
  });

  it('should be created', inject([WalkingARouteDataService], (service: WalkingARouteDataService) => {
    expect(service).toBeTruthy();
  }));
});
