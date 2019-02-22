import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(
    private session: SessionService,
    private router: Router
  ) {

  }

  canActivate() {
    if (this.session.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
  }
}