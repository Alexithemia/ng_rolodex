import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SelectService } from '../../services/select.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './editContact.component.html',
  styleUrls: ['./editContact.component.scss']
})

export class EditContactComponent {
  cardId: number = null;

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
    private router: Router,
    private select: SelectService
  ) {
    this.cardId = this.select.editId
  }

  ngOnInit() {
    if (!this.select.editId) { return this.router.navigate(['allContacts']); }
    this.backend.loadContact(this.select.editId)
      .then((contactData: any) => {
        this.formData = contactData;

      })
  }

  submitForm() {
    this.backend.editContact(this.cardId, this.formData)
      .then(() => {
        return this.router.navigate(['allContacts']);
      })
  }

}