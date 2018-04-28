import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeadlinesComponent} from './headlines.component';

const routes: Routes = [
  {
    path: '',
    component: HeadlinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadlinesRoutingModule {
}
