import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SelectService } from '../../services/select.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './deleteContact.component.html',
  styleUrls: ['./deleteContact.component.scss']
})

export class DeleteContactComponent implements OnInit {
  cardId: number = null;

  pageData: {
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
    this.cardId = this.select.deleteId
  }

  ngOnInit() {
    if (!this.select.deleteId) { return this.router.navigate(['allContacts']); }
    this.backend.loadContact(this.select.deleteId)
      .then((contactData: any) => {
        this.pageData = contactData;
      })
  }

  submitDelete() {
    this.backend.deleteContact(this.cardId)
      .then(() => {
        return this.router.navigate(['allContacts']);
      })
  }

}