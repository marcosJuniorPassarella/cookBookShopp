import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editingSubscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;

  constructor(private shopplService: ShoppingListService) {}

  ngOnInit(): void {
    this.editingSubscription = this.shopplService.startedEditing.subscribe({
      next: (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      },
    });
  }

  onAddItem(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shopplService.addIngredient(newIngredient);
  }

  ngOnDestroy(): void {
    this.editingSubscription.unsubscribe();
  }
}
