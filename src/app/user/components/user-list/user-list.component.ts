import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from 'rxjs';
import {User} from '../../models/user.module';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {selectAllUsers, selectLoading} from '../../../store/selectors/user.selector';
import {loadUsers} from '../../../store/actions/user.action';
import {UserState} from '../../../store/reducers/user.reducer';


@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  private readonly destroy$ = new Subject<void>();
  users$: Observable<User[]>;
  loading$: Observable<boolean>;

  constructor(private readonly store: Store) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectLoading);

  }


  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUsers() {
    this.store.dispatch(loadUsers());
  }
}
