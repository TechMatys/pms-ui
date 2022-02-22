import { TestBed } from '@angular/core/testing';

import { GlobalCodesService } from './global-codes.service';

describe('GlobalCodesService', () => {
  let service: GlobalCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
