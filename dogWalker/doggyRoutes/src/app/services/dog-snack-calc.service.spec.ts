import { TestBed, inject } from '@angular/core/testing';

import { DogSnackCalcService } from './dog-snack-calc.service';

describe('DogSnackCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogSnackCalcService]
    });
  });

  it('should be created', inject([DogSnackCalcService], (service: DogSnackCalcService) => {
    expect(service).toBeTruthy();
  }));
});
