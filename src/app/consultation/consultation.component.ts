import { Component, OnInit } from '@angular/core';
import {ConsultationService} from '../services/consultation.service';
import Consult from '../model/consult.model';
import User from '../model/user.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consults: Consult[];
  myDate: any;
  constructor(private consultService: ConsultationService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      const user: User = JSON.parse(localStorage.getItem('user'));
      this.consultService.getUser(user.id, true).subscribe((res) => {
        this.consults = res;
      });
    }
  }

  showHistory(): void {
    if (localStorage.getItem('user')) {
      const user: User = JSON.parse(localStorage.getItem('user'));
      this.consultService.getUser(user.id, false).subscribe((res) => {
        this.consults = res;
      });
    }
  }

  showUpcoming(): void {
    if (localStorage.getItem('user')) {
      const user: User = JSON.parse(localStorage.getItem('user'));
      this.consultService.getUser(user.id, true).subscribe((res) => {
        this.consults = res;
      });
    }
  }

  convertDate(date: number): string {
    const myDate = new Date(date);
    return myDate.toDateString();
  }

}
