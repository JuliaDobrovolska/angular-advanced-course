import {createAction, props} from '@ngrx/store';
import {User, UserData} from '../../user/models/user.module';

export const loadUsers = createAction("load users");
export const loadUsersSuccess = createAction(  'load Users Success',  props<{ users: User[] }>());
export const loadUsersFail = createAction("load users fail", props<{error: any}>());
