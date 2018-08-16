import { TestBed, inject } from '@angular/core/testing';

import { LatlonCalcService } from './latlon-calc.service';

describe('LatlonCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LatlonCalcService]
    });
  });

  it('should be created', inject([LatlonCalcService], (service: LatlonCalcService) => {
    expect(service).toBeTruthy();
  }));
});
