import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {
  }

  //auth
  register(userData) {
    return this.http.post('/api/register', userData).toPromise();
  }

  login(loginData) {
    return this.http.post("/api/login", loginData).toPromise();
  }

  logout() {
    return this.http.get("/api/logout").toPromise();
  }

  //profile
  loadProfile() {
    return this.http.get("/api/profile").toPromise();
  }

  editProfile(userData) {
    return this.http.put('/api/users', userData).toPromise();
  }

  //contacts
  searchContacts(term) {
    const search = '/api/contacts/search/' + term;
    return this.http.get(search).toPromise();
  }

  loadAllContacts() {
    return this.http.get("/api/contacts").toPromise();
  }

  loadContact(contactId) {
    const contactUrl = '/api/contacts/' + contactId;
    return this.http.get(contactUrl).toPromise();
  }

  addContact(contactData) {
    return this.http.post("/api/contacts", contactData).toPromise();
  }

  editContact(contactId, contactData) {
    const editContactUrl = '/api/contacts/' + contactId;
    return this.http.put(editContactUrl, contactData).toPromise();
  }

  deleteContact(contactId) {
    const deleteContactUrl = '/api/contacts/' + contactId;
    return this.http.delete(deleteContactUrl).toPromise();
  }
}