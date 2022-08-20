import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from 'src/app/shared/models/ingredients.model';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingListR');
  }

  onEditItem(index: number): void {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
    console.log(index);
  }
}
