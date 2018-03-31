import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EverythingComponent} from './everything.component';
import {EverythingService} from '../services/everything.service';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EverythingComponent', () => {
  let component: EverythingComponent;
  let fixture: ComponentFixture<EverythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormlyModule, FormlyBootstrapModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [EverythingComponent],
      providers: [EverythingService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
