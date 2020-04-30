import { TestBed } from '@angular/core/testing';

import { DiagnosticCenterService } from './diagnostic-center.service';

describe('DiagnosticCenterService', () => {
  let service: DiagnosticCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosticCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
