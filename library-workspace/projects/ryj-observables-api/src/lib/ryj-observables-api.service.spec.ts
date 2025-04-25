import { TestBed } from '@angular/core/testing';

import { RyjObservablesApiService } from './ryj-observables-api.service';

describe('RyjObservablesApiService', () => {
  let service: RyjObservablesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RyjObservablesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
