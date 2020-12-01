import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleDescriptionComponent } from './article-description.component';

describe('ArticleDescriptionComponent', () => {
  let component: ArticleDescriptionComponent;
  let fixture: ComponentFixture<ArticleDescriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
