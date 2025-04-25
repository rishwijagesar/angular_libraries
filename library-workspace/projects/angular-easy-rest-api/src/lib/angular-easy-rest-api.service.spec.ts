import { TestBed } from '@angular/core/testing';

import { AngularEasyRestApiService } from './angular-easy-rest-api.service';

describe('AngularEasyRestApiService', () => {
  let service: AngularEasyRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularEasyRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
