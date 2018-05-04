import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EverythingComponent} from './everything.component';
import {EverythingService} from '../services/everything.service';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormlyModule} from '@ngx-formly/core';

describe('EverythingComponent', () => {
  let component: EverythingComponent;
  let fixture: ComponentFixture<EverythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormlyModule,
        FormlyBootstrapModule
      ],
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

