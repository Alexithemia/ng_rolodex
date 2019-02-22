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
    //send login info to server, 
    return this.session.setSession(1, username); //on success return this
    //on fail return to login with error message
  }

  logout() {
    return this.session.clearSession();
  }

  loadAllContacts() {
    console.log('load all contacts from server');
  }

  editProfile(userData) {
    console.log('Edit user to ', userData);
  }
}