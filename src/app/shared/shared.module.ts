import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyBootstrapModule, NgbModule, FormlyModule],
  exports: [CommonModule, ReactiveFormsModule, NgbModule, FormlyBootstrapModule, FormlyModule]
})
export class SharedModule {}
