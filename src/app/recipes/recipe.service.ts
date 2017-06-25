import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipes: FirebaseListObservable<Recipe[]>;

  constructor(private slService: ShoppingListService, private db: AngularFireDatabase) {
    this.recipes = db.list('/recipes')
  }

  getRecipe(id) {
    return this.db.object(`recipes/${id}`);
  }

  addIngredientToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index, recipe: Recipe) {
    this.recipes.update(index, recipe);
  }

  deleteRecipe(index) {
    this.recipes.remove(index);
  }
}
