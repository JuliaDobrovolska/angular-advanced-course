import {Component, inject, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.module';

@Component({
  selector: 'app-user-info',
  standalone:false,
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  userDetail?: User;

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly userService: UserService = inject(UserService);


  ngOnInit(): void {
    let userId = this.route.snapshot.params['id'];
    this.getUserDetailById(userId)
  }

  getUserDetailById(id: number) {
    this.userService.getUserById(id).subscribe(res => {
      this.userDetail = res
      console.log(res)
    })
  }


}
