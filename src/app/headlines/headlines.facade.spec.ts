import { TestBed } from '@angular/core/testing';

import { HeadlinesFacade } from './headlines.facade';

describe('HeadlinesFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadlinesFacade = TestBed.get(HeadlinesFacade);
    expect(service).toBeTruthy();
  });
});
