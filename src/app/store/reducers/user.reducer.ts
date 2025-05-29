import {User} from '../../user/models/user.module';
import {createReducer, on} from '@ngrx/store';
import {loadUsers, loadUsersFail, loadUsersSuccess} from '../actions/user.action';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({...state, loading: true})),
  on(loadUsersSuccess, (state, {users}) =>
    ({...state, loading: false, users})),
  on(loadUsersFail, (state, {error}) =>
    ({...state, loading: false, error})),
)
