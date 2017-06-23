import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() id: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(this.id);
  }

}
