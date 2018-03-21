import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HeadlinesComponent} from './headlines/headlines.component';
import {EverythingComponent} from './everything/everything.component';
import {SourcesComponent} from './sources/sources.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'headlines'
  },

  {
    path: 'headlines',
    component: HeadlinesComponent
  },
  {
    path: 'everything',
    component: EverythingComponent
  },
  {
    path: 'sources',
    component: SourcesComponent
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
