import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDescriptionComponent } from './article-description.component';

describe('ArticleDescriptionComponent', () => {
  let component: ArticleDescriptionComponent;
  let fixture: ComponentFixture<ArticleDescriptionComponent>;

  beforeEach(async(() => {
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
