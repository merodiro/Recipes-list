import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { AuthViewDirective } from './auth-view.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DropdownDirective,
    AuthViewDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    AuthViewDirective
  ]
})
export class SharedModule { }
