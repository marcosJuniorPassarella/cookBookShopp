import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private igChangeSub$: Subscription;
  ingredients!: Ingredient[];

  constructor(private shoppLService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppLService.getIngredients();
    this.igChangeSub$ = this.shoppLService.ingredientsChanged.subscribe({
      next: (res: Ingredient[]) => {
        this.ingredients = res;
      },
    });
  }

  ngOnDestroy(): void {
    this.igChangeSub$.unsubscribe();
  }
}
