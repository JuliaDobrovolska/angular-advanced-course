import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;


  setLoggedIn(isLoggedIn: boolean) {
    this.loggedIn = isLoggedIn;
  }


  isLoggedIn(){
    return this.loggedIn;
  }
}
