import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../user/services/user.service';
import * as UserActions from '../actions/user.action';
import {map, mergeMap, of} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() => this.userService.getUsers().pipe(
        map(userData => UserActions.loadUsersSuccess({users: userData.data})),
        catchError(error => of(UserActions.loadUsersFail({error})))
      ))
    )
  )

}
