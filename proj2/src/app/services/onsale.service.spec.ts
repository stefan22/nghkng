import { TestBed, inject } from '@angular/core/testing';

import { OnsaleService } from './onsale.service';

describe('OnsaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnsaleService]
    });
  });

  it('should be created', inject([OnsaleService], (service: OnsaleService) => {
    expect(service).toBeTruthy();
  }));
});
