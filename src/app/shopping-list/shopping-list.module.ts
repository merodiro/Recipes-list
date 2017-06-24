import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

const shoppingListRoutes: Routes = [
  { path: '', component: ShoppingListComponent },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(shoppingListRoutes)
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListModule { }
