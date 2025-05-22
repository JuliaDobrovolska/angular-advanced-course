import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {userListResolver} from './shared/resolvers/user-list.resolver';
import {userGuard} from './shared/guards/user.guard';
import {ForbiddenComponent} from './forbidden/forbidden.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {
    path: 'user',
    children: [
      {
        path: '', component: UserListComponent,
        resolve: {
          userList: userListResolver
        }
      },
      {path: ':id', component: UserInfoComponent}
    ],
    canActivate: [userGuard]
  },
  {
    path: 'about', loadChildren: () => import('../../src/app/about/about.module')
      .then(m => m.AboutModule)
  },
  {path: 'accessDenied', component: ForbiddenComponent},
  {path: '**', component: NotFoundComponent},


];
