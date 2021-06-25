import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Consult from '../model/consult.model';
import {ConsultationService} from '../services/consultation.service';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.scss']
})
export class ShowScheduleComponent implements OnInit {
  consults: Consult[];

  constructor(private router: Router, private consultService: ConsultationService) { }

  ngOnInit(): void {
    this.consultService.getConsults().pipe().subscribe((res) => this.consults = res);
  }

  addConsult(): void {
    this.router.navigateByUrl('/addConsult');
  }

  convertDate(date: number): string {
    const myDate = new Date(date);
    return myDate.toDateString();
  }

  updateConsult(consult: Consult): void {
    consult.accepted = true;
    console.log(consult);
    // this.consultService.
  }
  deleteConsult(id: number): void{
    this.consultService.deleteConsult(id).pipe().subscribe(() => {
      this.consultService.getConsults().pipe().subscribe((res) => this.consults = res);
    });
  }
}
