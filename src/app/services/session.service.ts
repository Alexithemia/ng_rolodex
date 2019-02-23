import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: {
    id: number;
    userName: string;
    loggedIn: boolean;
  } = {
      id: null,
      userName: '',
      loggedIn: false
    };

  constructor(
    private router: Router,
  ) {
    let userString = localStorage.getItem('user');
    try {
      if (userString) {
        this.user = JSON.parse(userString);
      } else { console.log('User was not found'); }
    }
    catch (err) {
      console.log('Error parsing user');
    }
  }


  getSession() {
    return this.user;
  }

  setSession(userId, username) {
    this.user.id = Number(userId);
    this.user.userName = username;
    this.user.loggedIn = true;

    let userString = JSON.stringify(this.user);
    localStorage.setItem('user', userString);
  }

  clearSession() {
    this.user.loggedIn = false;
    this.user.userName = '';
    this.user.id = null;

    localStorage.removeItem('user');

    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.user.loggedIn;
  }
}