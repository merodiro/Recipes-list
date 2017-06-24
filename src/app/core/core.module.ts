import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
  ]
})
export class CoreModule { }
