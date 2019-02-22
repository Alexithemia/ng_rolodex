import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
// import { HeaderComponent } from '../../shared/header/header.component';

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
    private backend: BackendService,
    // private header: HeaderComponent
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
    // send backend
    console.log(this.formData.username);
    console.log(this.formData.password);
    // this.header.login();
    return this.backend.login(this.formData.username, this.formData.password)
  }
}