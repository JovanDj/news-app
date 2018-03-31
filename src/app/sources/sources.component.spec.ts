import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SourcesComponent} from './sources.component';
import {SourcesService} from '../services/sources.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SourcesComponent', () => {
  let component: SourcesComponent;
  let fixture: ComponentFixture<SourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SourcesComponent],
      providers: [SourcesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
