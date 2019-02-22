import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  loggedIn: boolean = false;

  constructor(private session: SessionService, private backend: BackendService) {
    this.loggedIn = session.isLoggedIn();
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
    return this.backend.logout();
  }
}