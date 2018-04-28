import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EverythingComponent} from './everything.component';

const routes: Routes = [
  {
    path: '',
    component: EverythingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EverythingRoutingModule {
}
