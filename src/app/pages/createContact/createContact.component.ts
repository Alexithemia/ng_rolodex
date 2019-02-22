import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

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

  constructor(private backend: BackendService) {

  }

  submitForm() {
    console.log(this.formData);

  }

}