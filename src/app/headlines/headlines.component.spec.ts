import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeadlinesComponent} from './headlines.component';
import {HeadlinesService} from '../services/headlines.service';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HeadlinesComponent', () => {
  let component: HeadlinesComponent;
  let fixture: ComponentFixture<HeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormlyModule, FormlyBootstrapModule, HttpClientTestingModule],
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
