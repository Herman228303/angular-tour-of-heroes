import { TestBed } from '@angular/core/testing';

import { MessageService } from './masseges.service';

describe('MassegesService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
