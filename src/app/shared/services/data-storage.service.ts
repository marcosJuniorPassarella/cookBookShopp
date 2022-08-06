import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecipeService } from '../../pages/recipes/recipe.service';
import { Recipe } from '../../pages/recipes/recipes.model';

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

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap({
        next: (recipes) => this.recipeService.setRecipes(recipes),
      })
    );
  }
}
