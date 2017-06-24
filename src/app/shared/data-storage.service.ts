import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeservice: RecipeService,
              private authService: AuthService) { }

  storeRecipes(): Observable<Recipe[]> {
    // firebase.database().ref('test').set(this.recipeservice.getRecipes())
    const token = this.authService.getToken();
    return this.http.put(`https://recipes-book-c860e.firebaseio.com/recipes.json?auth=${token}`, this.recipeservice.getRecipes())
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
    const token = this.authService.getToken();

    return this.http.get(`https://recipes-book-c860e.firebaseio.com/recipes.json?auth=${token}`)
      .map(res => res.json())
      .subscribe((recipes: Recipe[]) => {
        this.recipeservice.setRecipes(recipes);
      })
  }

}
