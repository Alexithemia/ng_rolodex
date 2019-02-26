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

  isNameInvalid: boolean = true;
  isMobileInvalid: boolean = false;
  isWorkInvalid: boolean = false;
  isHomeInvalid: boolean = false;
  isEmailInvalid: boolean = false;

  constructor(
    private backend: BackendService,
    private router: Router
  ) {

  };

  validateMobile() {
    const { mobile } = this.formData;
    if (mobile && mobile.length < 10 || mobile && mobile.match(/[^-0-9]/gi)) { this.isMobileInvalid = true }
    else { this.isMobileInvalid = false }
  };

  validateWork() {
    const { work } = this.formData;
    if (work && work.length < 10 || work && work.match(/[^-0-9]/gi)) { this.isWorkInvalid = true }
    else { this.isWorkInvalid = false }
  };

  validateHome() {
    const { home } = this.formData;
    if (home && home.length < 10 || home && home.match(/[^-0-9]/gi)) { this.isHomeInvalid = true }
    else { this.isHomeInvalid = false }
  };

  validateEmail() {
    const { email } = this.formData;
    if (email.includes('@') && email.includes('.') && email) { this.isEmailInvalid = false }
    else { this.isEmailInvalid = true }
  };

  validateName() {
    const { name } = this.formData;
    if (!name) { this.isNameInvalid = true }
    else if (name.length < 2) { this.isNameInvalid = true }
    else { this.isNameInvalid = false }
  };

  submitForm() {
    this.backend.addContact(this.formData)
      .then(() => {
        return this.router.navigate(['allContacts']);
      })
  };

}