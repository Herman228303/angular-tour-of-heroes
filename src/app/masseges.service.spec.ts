import { TestBed } from '@angular/core/testing';

import { MassegesService } from './masseges.service';

describe('MassegesService', () => {
  let service: MassegesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassegesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
