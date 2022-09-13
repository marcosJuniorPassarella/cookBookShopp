import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredients.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingListR');
  }

  onEditItem(index: number): void {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
    console.log(index);
  }
}
