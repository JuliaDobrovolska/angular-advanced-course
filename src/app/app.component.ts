import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserService} from './user/user.service';
import {UserData} from './user/user.module';
import {Observable} from 'rxjs';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-advanced-course';

  users$!: Observable<UserData>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
