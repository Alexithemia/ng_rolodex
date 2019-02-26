import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  formData: {
    username: string,
    password: string,
  } = {
      username: '',
      password: '',
    };

  isUsernameInvalid: boolean = true;
  isPasswordInvalid: boolean = true;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }

  validatePassword() {
    const { password } = this.formData;
    if (!password) { this.isPasswordInvalid = true }
    else if (password.length < 3) { this.isPasswordInvalid = true }
    else { this.isPasswordInvalid = false }
  }

  validateUsername() {
    const { username } = this.formData;
    if (!username) { this.isUsernameInvalid = true }
    else if (username.length < 3) { this.isUsernameInvalid = true }
    else { this.isUsernameInvalid = false }
  }

  submitForm() {
    return this.auth.login(this.formData);
  }

  register() {
    return this.router.navigate(['register']);
  }
}