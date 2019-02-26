import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  constructor(private session: SessionService, private auth: AuthService) {

  }

  isLoggedIn() {
    return this.session.isLoggedIn()
  }

  logout() {
    return this.auth.logout();
  }
}