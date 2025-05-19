import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {UserData} from './user.module';
import {DUMMY_API_USERS} from './user.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserData> {
    return this.http.get<UserData>(`${DUMMY_API_USERS}/user?limit=10`).pipe(catchError(error => {
      console.error('Помилка при отриманні користувачів:', error);
      return of({data: [], total: 0, limit: 10, page: 0} as UserData);
    }));
  }

}
