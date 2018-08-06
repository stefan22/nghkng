import { TestBed, inject } from '@angular/core/testing';

import { Season10DataService } from './season10-data.service';

describe('Season10DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Season10DataService]
    });
  });

  it('should be created', inject([Season10DataService], (service: Season10DataService) => {
    expect(service).toBeTruthy();
  }));
});
