import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import User from '../model/user.model';
import {UserService} from '../services/user.service';
import {ConsultationService} from '../services/consultation.service';
import Consult from '../model/consult.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  form: FormGroup;
  time = { hour: 12, minute: 0 };
  users: User[];
  constructor(private userService: UserService, private consultService: ConsultationService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      input: new FormControl(new Date(), [Validators.required]),
      timeForm: new FormControl('', [Validators.required]),
      user: new FormControl(User, [Validators.required])
    });
    this.userService.getUsers().pipe().subscribe((res) => this.users = res);
  }

  onClick(): void {
    const milliseconds: number = this.form.get('input').value.getTime() +
      (Number(this.form.get('timeForm').value.substring(0, 2)) * 60 * 60 * 1000) +
      (Number(this.form.get('timeForm').value.substring(3, 5)) * 60 * 1000);
    const consult: Consult = { user: this.form.get('user').value, accepted: false, date: milliseconds};
    this.consultService.addConsult(consult).pipe().subscribe(() => {
      alert('Consultatie adaugata');
      this.router.navigateByUrl('/');
    });
  }

}
