import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './allContacts.component.html',
  styleUrls: ['./allContacts.component.scss']
})

export class AllContactsComponent implements OnInit {
  contactList: object = [];

  constructor(
    private backend: BackendService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.backend.loadAllContacts()
      .then((contacts) => {
        this.contactList = contacts;
      })
  }

  editContact(id) {
    return this.router.navigate([`editContact/${id}`]);
  }

  deleteContact(id) {
    return this.router.navigate([`deleteContact/${id}`]);
  }
}