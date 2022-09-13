import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../pages/shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
  shoppingListR: fromShoppingList.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingListR: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,    
};
