import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  constructor(private session: SessionService, private backend: BackendService) {

  }

  isLoggedIn() {
    return this.session.isLoggedIn()
  }

  logout() {
    return this.backend.logout();
  }
}