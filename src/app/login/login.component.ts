import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  falseUserPassword = true;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl( '', [Validators.required]),
        password: new FormControl( '', [Validators.required])
      });
  }

  goRegister(): void {
    this.router.navigateByUrl('/register');
  }

  login(): void {
    this.userService.login( this.loginForm.get('email').value, this.loginForm.get('password').value).pipe().subscribe( data => {
      this.router.navigateByUrl('/');
    },
      error => this.falseUserPassword = false);
  }
}
