import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinesComponent } from './headlines.component';
import { HeadlinesService } from '../services/headlines.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';

describe('HeadlinesComponent', () => {
  let component: HeadlinesComponent;
  let fixture: ComponentFixture<HeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormlyModule, ReactiveFormsModule, HttpClientTestingModule, FormlyBootstrapModule],
      declarations: [HeadlinesComponent],
      providers: [HeadlinesService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
