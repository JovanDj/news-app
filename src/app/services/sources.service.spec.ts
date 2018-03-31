import { TestBed, inject } from '@angular/core/testing';

import { SourcesService } from './sources.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

      providers: [SourcesService]
    });
  });

  it('should be created', inject([SourcesService], (service: SourcesService) => {
    expect(service).toBeTruthy();
  }));
});
