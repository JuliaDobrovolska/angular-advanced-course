import {NgModule} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';
import {userRoutes} from './user-routing.module';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {NzTableComponent, NzTableModule} from 'ng-zorro-antd/table';
import {NzTypographyComponent} from 'ng-zorro-antd/typography';
import {NzCardComponent, NzCardMetaComponent} from 'ng-zorro-antd/card';
import {SharedModule} from '../shared/shared.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [UserInfoComponent, UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    NzTableComponent,
    NzTypographyComponent,
    NzCardMetaComponent,
    NzCardComponent,
    NzTableComponent,
    NzTableModule,
    NgForOf,
    NzLayoutModule,
    NzTypographyComponent,
    RouterLink,
    SharedModule
  ]
})
export class UserModule {
}
