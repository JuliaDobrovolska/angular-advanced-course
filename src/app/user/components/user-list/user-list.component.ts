import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {User} from '../../models/user.module';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NzTableComponent} from "ng-zorro-antd/table";
import {NgForOf} from "@angular/common";


@Component({
    selector: 'app-user-list',

    templateUrl: './user-list.component.html',
    imports: [
        NzTableComponent,
        RouterLink,
        NgForOf
    ],
    styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, OnDestroy {
    private readonly destroy$ = new Subject<void>();

    users: User[] = [];
    private readonly route: ActivatedRoute = inject(ActivatedRoute);

    trackByFn(_index: any, item: { id: any; }) {
        return item.id;
    }


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
