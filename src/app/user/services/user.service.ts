import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, UserData} from '../models/user.module';
import {DUMMY_API_USERS} from '../models/user.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly http = inject(HttpClient);

  getUsers(): Observable<UserData> {
    return this.http.get<UserData>(`${DUMMY_API_USERS}/user?limit=10`);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${DUMMY_API_USERS}/user/${userId}`);
  }


}
