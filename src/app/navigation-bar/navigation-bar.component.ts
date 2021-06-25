import { Component, OnInit } from '@angular/core';
import User from '../model/user.model';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  isLoogedIn(): boolean {
    if (localStorage.getItem('user')){
      const user: User = JSON.parse(localStorage.getItem('user'));
      if (user){
        return true;
      }
    }
    return false;
  }

  isDoctor(): boolean {
    if (localStorage.getItem('user')){
      const user: User = JSON.parse(localStorage.getItem('user'));
      if (user.doctor){
        return true;
      }
    }
    return false;
  }
  logOut(): void {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
