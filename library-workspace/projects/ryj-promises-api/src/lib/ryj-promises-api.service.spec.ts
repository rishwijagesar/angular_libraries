import { TestBed } from '@angular/core/testing';

import { RyjPromisesApiService } from './ryj-promises-api.service';

describe('RyjPromisesApiService', () => {
  let service: RyjPromisesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RyjPromisesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
