import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ClickOutsideModule } from 'ng4-click-outside';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgbModule.forRoot(),
    FormlyModule,
    ClickOutsideModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyBootstrapModule,
    FormlyModule,
    ClickOutsideModule
  ]
})
export class SharedModule {}
