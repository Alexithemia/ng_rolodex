import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  formData: {
    searchString: string
  } = {
      searchString: ''
    }

  contactList = []

  constructor(
    private backend: BackendService,
  ) {

  }

}
