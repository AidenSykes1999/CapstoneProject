import { TestBed } from '@angular/core/testing';

import { ResthttpService } from './resthttp.service';

describe('ResthttpService', () => {
  let service: ResthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});