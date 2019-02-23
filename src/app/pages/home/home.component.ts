import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  formData: {
    searchString: string
  } = {
      searchString: ''
    }

  contactList = []

  constructor(
    private backend: BackendService,
    private router: Router
  ) {

  }

  sendSearch() {
    if (this.formData.searchString) {
      this.backend.searchContacts(this.formData.searchString)
        .then((results: any) => {
          this.contactList = results;
        })
    }
  }

  editContact(id) {
    return this.router.navigate([`editContact/${id}`]);
  }

  deleteContact(id) {
    return this.router.navigate([`deleteContact/${id}`]);
  }
}
