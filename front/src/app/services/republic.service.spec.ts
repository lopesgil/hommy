import { TestBed } from '@angular/core/testing';

import { RepublicServiceService } from './republic-service.service';

describe('RepublicServiceService', () => {
  let service: RepublicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepublicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
