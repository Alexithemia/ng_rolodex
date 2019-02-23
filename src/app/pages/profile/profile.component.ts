import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  pageData: {
    username: string,
    name: string,
    email: string,
    address: string
  } = {
      username: '',
      name: '',
      email: '',
      address: ''
    };

  showEdit: boolean = false;

  formData: {
    name: string,
    email: string,
    address: string
  } = {
      name: this.pageData.name,
      email: this.pageData.email,
      address: this.pageData.address
    };

  constructor(private backend: BackendService) {

  }

  showEditor() {
    this.showEdit = !this.showEdit;
  }

  submitEdit() {
    this.backend.editProfile(this.formData);
  }

  ngOnInit() {
    // use backend get user data assign to page data
  }
}