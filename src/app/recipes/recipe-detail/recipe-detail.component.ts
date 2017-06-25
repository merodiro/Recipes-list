import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database/firebase_object_observable';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: FirebaseObjectObservable<Recipe>;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params.id;
        this.recipe = this.recipeService.getRecipe(this.id);
      })

  }

  onAddToShoppingList() {
    this.recipe.subscribe(recipe => {
    this.recipeService.addIngredientToShoppingList(recipe.ingredients);
    })
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
