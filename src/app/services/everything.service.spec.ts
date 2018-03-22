import { TestBed, inject } from '@angular/core/testing';

import { EverythingService } from './everything.service';

describe('EverythingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EverythingService]
    });
  });

  it('should be created', inject([EverythingService], (service: EverythingService) => {
    expect(service).toBeTruthy();
  }));
});
