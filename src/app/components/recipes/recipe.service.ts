import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'http://cdn.pixabay.com/photo/2016/06/15/19/09/food-145964_960_720.jpg'
    ),
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'http://cdn.pixabay.com/photo/2016/06/15/19/09/food-145964_960_720.jpg'
    ),
  ];

  getRecipes(): Recipe[] {
    // Retorna uma cópia do array recipes
    return this.recipes.slice();
  }
}
