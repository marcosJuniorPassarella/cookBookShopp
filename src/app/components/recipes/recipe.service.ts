import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Recipe } from './recipes.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'http://cdn.pixabay.com/photo/2016/06/15/19/09/food-145964_960_720.jpg',
      [new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'http://cdn.pixabay.com/photo/2016/06/15/19/09/food-145964_960_720.jpg',
      [new Ingredient('Meat', 2)]
    ),
  ];

  constructor(private shopplService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    // Retorna uma cópia do array recipes
    return this.recipes.slice();
  }

  getRecipeById(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shopplService.addIngredients(ingredients);
  }
}
