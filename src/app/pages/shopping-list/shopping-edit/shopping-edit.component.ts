import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../../shared/models/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  editingSubscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;

  constructor(
    private shopplService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.editingSubscription = this.shopplService.startedEditing.subscribe({
      next: (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shopplService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      },
    });
  }

  onSubmit(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.editMode
      ? this.store.dispatch(
          new ShoppingListActions.UpdateIngredient({
            index: this.editedItemIndex,
            ingredient: newIngredient,
          })
        )
      : this.store.dispatch(
          new ShoppingListActions.AddIngredient(newIngredient)
        );
    this.editMode = false;
    form.reset();
  }

  onClear(): void {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(): void {
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient(this.editedItemIndex)
    );
    this.onClear();
  }

  ngOnDestroy(): void {
    this.editingSubscription.unsubscribe();
  }
}
