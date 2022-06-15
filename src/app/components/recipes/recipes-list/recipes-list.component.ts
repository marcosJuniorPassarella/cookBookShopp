import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
