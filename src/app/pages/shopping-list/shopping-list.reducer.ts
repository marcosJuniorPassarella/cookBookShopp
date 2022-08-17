import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/models/ingredients.model';

const initialState = {
  ingredients: [new Ingredient('Maças', 5), new Ingredient('Laranjas', 7)],
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [...state.ingredients, action],
      };
  }
}
