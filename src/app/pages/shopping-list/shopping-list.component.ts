import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../../shared/models/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  private igChangeSub$: Subscription;
  ingredients!: Observable<{ ingredients: Ingredient[] }>;

  constructor(
    private shoppLService: ShoppingListService,
    private store: Store<{ shoppingListR: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingListR');
  }

  onEditItem(index: number): void {
    this.shoppLService.startedEditing.next(index);
  }
}
