import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HeadlinesComponent} from './headlines/headlines.component';
import {EverythingComponent} from './everything/everything.component';

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
