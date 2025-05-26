import {Routes} from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {userListResolver} from './resolvers/user-list.resolver';
import {UserInfoComponent} from './components/user-info/user-info.component';


export const userRoutes: Routes = [
  {
    path: '', component: UserListComponent,
    resolve: {
      userList: userListResolver
    }
  },
  {path: ':id', component: UserInfoComponent}
]
