import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss'],
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
