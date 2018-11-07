import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

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
    loadChildren: './headlines/headlines.module#HeadlinesModule'
  },

  {
    path: 'everything',
    loadChildren: './everything/everything.module#EverythingModule'
  },
  {
    path: 'sources',
    loadChildren: './sources/sources.module#SourcesModule'
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
