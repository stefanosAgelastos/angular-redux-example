import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserCredentials } from "src/app/models";
import { dispatch } from "@angular-redux/store";
import { login } from "../actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: UserCredentials = {
    username: "",
    password: ""
  };

  constructor(private router: Router) { 
  }

  @dispatch()
  dispatchLogin() {
      const credentials = {
        ...this.credentials
      };

      return login(credentials);
  }

  login() {
    this.dispatchLogin();
    this.router.navigate(['todo']);
  }

}
