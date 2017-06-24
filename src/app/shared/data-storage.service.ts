import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeservice: RecipeService) { }

  storeRecipes(): Observable<Recipe[]> {
    return this.http.put('https://recipes-book-c860e.firebaseio.com/recipes.json', this.recipeservice.getRecipes())
      .map(res => res.json())
      .map((recipes: Recipe[]) => {
        for (const recipe of recipes) {
          if (!recipe.ingredients) {
            recipe.ingredients = []
          }
          return recipes;
        }
      })
  }

  getRecipes() {
    return this.http.get('https://recipes-book-c860e.firebaseio.com/recipes.json')
      .map(res => res.json())
      .subscribe((recipes: Recipe[]) => {
        this.recipeservice.setRecipes(recipes);
      })
  }

}
