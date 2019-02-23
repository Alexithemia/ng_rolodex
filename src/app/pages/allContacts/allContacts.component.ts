import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SelectService } from '../../services/select.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './allContacts.component.html',
  styleUrls: ['./allContacts.component.scss']
})

export class AllContactsComponent implements OnInit {
  contactList: object = [];

  constructor(
    private backend: BackendService,
    private select: SelectService,
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
    this.select.setEditId(id);
    return this.router.navigate(['editContact']);
  }

  deleteContact(id) {
    this.select.setDeleteId(id);
    return this.router.navigate(['deleteContact']);
  }
}