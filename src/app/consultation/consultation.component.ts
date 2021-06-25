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

  consult: Consult;
  myDate: any;
  constructor(private consultService: ConsultationService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      const user: User = JSON.parse(localStorage.getItem('user'));
      this.consultService.getUser(user.id).subscribe((res) => {
        this.consult = res;
        console.log(res);
        this.myDate = this.datePipe.transform(this.consult.date, 'dd-MM-yyyy');
      });
    }
  }

  isAccepted(): boolean {
    console.log(this.consult.accepted);
    return this.consult.accepted;
  }
}
