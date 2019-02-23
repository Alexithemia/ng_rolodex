import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';

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
      name: '',
      email: '',
      address: ''
    };

  constructor(
    private backend: BackendService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.backend.loadProfile()
      .then((userData: any) => {
        this.pageData = userData;
      })
  }

  showEditor() {
    this.showEdit = !this.showEdit;
    this.formData.name = this.pageData.name;
    this.formData.email = this.pageData.email;
    this.formData.address = this.pageData.address;
  }

  submitEdit() {
    this.backend.editProfile(this.formData)
      .then(() => {
        this.pageData.name = this.formData.name;
        this.pageData.email = this.formData.email;
        this.pageData.address = this.formData.address;
        this.showEdit = false;
      });
  }
}