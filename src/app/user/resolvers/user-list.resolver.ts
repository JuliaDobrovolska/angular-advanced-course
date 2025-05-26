import {ResolveFn} from '@angular/router';
import {UserService} from '../services/user.service';
import {inject} from '@angular/core';
import {UserData} from '../models/user.module';

export const userListResolver: ResolveFn<UserData> = (route, state) => {
  const userService: UserService = inject(UserService);
  return userService.getUsers();
};
