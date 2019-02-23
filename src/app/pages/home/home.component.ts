import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SelectService } from '../../services/select.service';
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
    private select: SelectService,
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
    this.select.setEditId(id);
    return this.router.navigate(['editContact']);
  }

  deleteContact(id) {
    this.select.setDeleteId(id);
    return this.router.navigate(['deleteContact']);
  }
}
