import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './createContact.component.html',
  styleUrls: ['./createContact.component.scss']
})

export class CreateContactComponent {

  formData: {
    name: string,
    address: string,
    mobile: string,
    work: string,
    home: string,
    email: string,
    twitter: string,
    instagram: string,
    github: string
  } = {
      name: '',
      address: '',
      mobile: '',
      work: '',
      home: '',
      email: '',
      twitter: '',
      instagram: '',
      github: ''
    };

  constructor(
    private backend: BackendService,
    private router: Router
  ) {

  }

  submitForm() {
    this.backend.addContact(this.formData)
      .then(() => {
        return this.router.navigate(['allContacts']);
      })
  }

}