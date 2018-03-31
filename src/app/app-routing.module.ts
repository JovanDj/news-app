import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HeadlinesComponent} from './headlines/headlines.component';
import {EverythingComponent} from './everything/everything.component';
import {SourcesComponent} from './sources/sources.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
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
    path: 'everything/:page',
    component: EverythingComponent
  },
  {
    path: 'sources',
    component: SourcesComponent
  },

  {
    path: '**',
    redirectTo: 'home'
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
