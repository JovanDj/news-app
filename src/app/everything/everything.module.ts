import { NgModule } from '@angular/core';

import { EverythingRoutingModule } from './everything-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EverythingComponent } from './everything.component';

@NgModule({
  imports: [SharedModule, EverythingRoutingModule],
  declarations: [EverythingComponent]
})
export class EverythingModule {}
