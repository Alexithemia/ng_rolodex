import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';


@Component({
  templateUrl: './allContacts.component.html',
  styleUrls: ['./allContacts.component.scss']
})

export class AllContactsComponent implements OnInit {
  contactList: object = []

  constructor(
    private backend: BackendService
  ) {

  }

  ngOnInit() {
    // this.contactList = this.backend.fullList();
  }
}