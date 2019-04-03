import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourcesComponent } from './sources.component';
import { SourcesResolverService } from '../resolvers/sources-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: SourcesComponent,
    resolve: {
      sources: SourcesResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourcesRoutingModule {}
