import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import User from '../model/user.model';
import Address from '../model/address.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
    });
  }

  register(): void {
    const address: Address = { street: this.registerForm.get('street').value, country: this.registerForm.get('country').value,
      region: this.registerForm.get('region').value, city: this.registerForm.get('city').value,
      number: this.registerForm.get('number').value};
    const user: { doctor: boolean; password: any; address: Address; phone: any; name: any; username: any } = { name: this.registerForm.get('name').value, password: this.registerForm.get('password').value,
      phone: this.registerForm.get('phone').value, address, doctor: false, username: this.registerForm.get('email').value};
    this.userService.registerUser(user).subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }

  login(): void {
    this.router.navigateByUrl('/login');
  }
}
