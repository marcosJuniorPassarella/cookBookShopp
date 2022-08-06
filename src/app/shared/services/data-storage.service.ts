import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, Observable, take, exhaustMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecipeService } from '../../pages/recipes/recipe.service';
import { Recipe } from '../../pages/recipes/recipes.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url = environment.firebaseUrl;

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.url, recipes).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.authService.user.pipe(
      // take(1) é um operador que permite que o observable só seja executado uma vez e em seguida seja descartado automaticamente
      take(1),
      // exhaustMap é um operador que permite que o observable seja executado enquanto outro observable é executado
      // ou seja, enquanto o primeiro for executado, o segundo não será executado e o resultado será retornado
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(this.url, {
          params: new HttpParams().set('auth', user.token),
        });
      }),
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
