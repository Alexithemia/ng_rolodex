import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service'

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  // url: string = 'https://localhost:4200';

  constructor(
    private http: HttpClient,
    private session: SessionService
  ) {

  }

  login(username, password) {
    // return this.http.get('https://').toPromise();
    return this.session.setSession(1, username);
  }

  logout() {
    return this.session.clearSession();
  }
}