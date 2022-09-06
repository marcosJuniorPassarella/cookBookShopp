import { User } from 'src/app/shared/models/user.model';

export interface State {
  user: User;
}

const initialState: State = {
  user: null,
};

export function authReducer(state = initialState, action) {}
