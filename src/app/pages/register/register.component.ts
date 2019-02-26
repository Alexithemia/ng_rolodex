import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  formData: {
    username: string,
    password: string,
    name: string,
    email: string,
    address: string
  } = {
      username: '',
      password: '',
      name: '',
      email: '',

      address: ''
    };

  isUsernameInvalid: boolean = true;
  isPasswordInvalid: boolean = true;
  isEmailInvalid: boolean = false;

  constructor(
    private auth: AuthService
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

  validateEmail() {
    const { email } = this.formData;
    if (!email.includes('@') && !email.includes('.') && email) { this.isEmailInvalid = true }
    else { this.isEmailInvalid = false }
  }


  submitForm() {
    return this.auth.register(this.formData);
  }
}