import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinesFormComponent } from './headlines-form.component';

describe('HeadlinesFormComponent', () => {
  let component: HeadlinesFormComponent;
  let fixture: ComponentFixture<HeadlinesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
