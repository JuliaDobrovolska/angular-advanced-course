import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NzTableComponent, NzTableModule} from 'ng-zorro-antd/table';
import {NgForOf} from '@angular/common';
import {Subject, takeUntil} from 'rxjs';
import {User} from '../models/user.module';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTypographyComponent} from 'ng-zorro-antd/typography';


@Component({
  selector: 'app-user-list',
  imports: [
    NzTableComponent,
    NzTableModule,
    NgForOf,
    NzLayoutModule,
    NzTypographyComponent,
    RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  users: User[] = [];
  private readonly route: ActivatedRoute = inject(ActivatedRoute);


  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.users = data['userList'].data;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
