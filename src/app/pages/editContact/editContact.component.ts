import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './editContact.component.html',
  styleUrls: ['./editContact.component.scss']
})

export class EditContactComponent implements OnInit {
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
    private route: ActivatedRoute,
  ) {
    this.cardId = Number(this.route.snapshot.paramMap.get('id'));
  };

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) { return this.router.navigate(['allContacts']); };
    this.backend.loadContact(id)
      .then((contactData: any) => {
        this.formData = contactData;
      })
  };

  submitForm() {
    this.backend.editContact(this.cardId, this.formData)
      .then(() => {
        return this.router.navigate(['allContacts']);
      });
  };
};