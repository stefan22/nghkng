import { TestBed, inject } from '@angular/core/testing';

import { OnsaleDataService } from './onsale-data.service';

describe('OnsaleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnsaleDataService]
    });
  });

  it('should be created', inject([OnsaleDataService], (service: OnsaleDataService) => {
    expect(service).toBeTruthy();
  }));
});
