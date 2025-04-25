import { TestBed } from '@angular/core/testing';

import { RyjRestApiService } from './ryj-rest-api.service';

describe('RyjRestApiService', () => {
  let service: RyjRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RyjRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
