import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecipeService } from '../../components/recipes/recipe.service';
import { Recipe } from '../../components/recipes/recipes.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url = environment.firebaseUrl;

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.url, recipes).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }

  fetchRecipes(): void {
    this.http.get<Recipe[]>(this.url).subscribe({
      next: (recipes) => this.recipeService.setRecipes(recipes),
      error: (err) => console.log(err),
    });
  }
}
