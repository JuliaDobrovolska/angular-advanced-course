import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {userGuard} from './user/guards/user.guard';
import {ForbiddenComponent} from './pages/forbidden/forbidden.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {
    path: 'user', loadChildren: () => import('../../src/app/user/user.module')
      .then(m => m.UserModule),
    canActivate: [userGuard]
  },
  {
    path: 'about', loadChildren: () => import('../../src/app/about/about.module')
      .then(m => m.AboutModule)
  },
  {path: 'accessDenied', component: ForbiddenComponent},
  {path: '**', component: NotFoundComponent},


];
