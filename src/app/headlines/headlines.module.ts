import { NgModule } from "@angular/core";

import { HeadlinesRoutingModule } from "./headlines-routing.module";
import { HeadlinesComponent } from "./headlines.component";
import { SharedModule } from "../shared/shared.module";
import { HeadlinesFormComponent } from "./headlines-form/headlines-form.component";
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDescriptionComponent } from './article-description/article-description.component';
import { PageButtonsComponent } from './page-buttons/page-buttons.component';

@NgModule({
  imports: [SharedModule, HeadlinesRoutingModule],
  declarations: [HeadlinesComponent, HeadlinesFormComponent, ArticlesComponent, ArticleDescriptionComponent, PageButtonsComponent]
})
export class HeadlinesModule {}
