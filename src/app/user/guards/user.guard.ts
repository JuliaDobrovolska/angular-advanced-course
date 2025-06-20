import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';
import {inject} from '@angular/core';

export const userGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['accessDenied']);
  return false;
};

