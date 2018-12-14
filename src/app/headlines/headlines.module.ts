import { NgModule } from '@angular/core';

import { HeadlinesRoutingModule } from './headlines-routing.module';
import { HeadlinesComponent } from './headlines.component';
import { SharedModule } from '../shared/shared.module';
import { HeadlinesFormComponent } from './headlines-form/headlines-form.component';

@NgModule({
  imports: [SharedModule, HeadlinesRoutingModule],
  declarations: [HeadlinesComponent, HeadlinesFormComponent]
})
export class HeadlinesModule {}
