import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeadlinesComponent} from './headlines.component';
import {HeadlinesService} from '../services/headlines.service';
import {SharedModule} from '../shared/shared.module';

describe('HeadlinesComponent', () => {
  let component: HeadlinesComponent;
  let fixture: ComponentFixture<HeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [HeadlinesComponent],
      providers: [HeadlinesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
