import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { SessionService } from './session.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService,
    private router: Router
  ) { }

  register(userData) {
    return this.backend.register(userData)
      .then(() => {
        return this.router.navigate(['login']);
      });
  }

  login(loginData) {
    this.backend.login(loginData)
      .then(response => {
        return this.session.setSession(response['id'], response['username']);
      })
      .then(() => {
        return this.router.navigate(['']);
      });
  }

  logout() {
    return this.backend.logout()
      .then(() => {
        return this.session.clearSession();
      })
      .then(() => {
        return this.router.navigate(['login']);
      });
  }
}