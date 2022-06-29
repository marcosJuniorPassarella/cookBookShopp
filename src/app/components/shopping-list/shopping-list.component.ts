import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];

  constructor(private shoppLService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppLService.getIngredients();
    this.shoppLService.ingredientsChanged.subscribe({
      next: (res: Ingredient[]) => {
        this.ingredients = res;
      },
    });
  }
}
