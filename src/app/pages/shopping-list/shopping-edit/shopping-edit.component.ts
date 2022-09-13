import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Ingredient } from '../../../shared/models/ingredients.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  private storeSubscription!: Subscription;
  editMode = false;
  editedItem!: Ingredient;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select('shoppingListR').subscribe({
      next: (stateData) => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedIngredient;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        } else {
          this.editMode = false;
        }
      },
    });
  }

  onSubmit(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.editMode
      ? this.store.dispatch(
          new ShoppingListActions.UpdateIngredient(newIngredient)
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
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete(): void {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
