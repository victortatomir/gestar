import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {RegisterComponent} from './register/register.component';
import {ConsultationComponent} from './consultation/consultation.component';
import {ShowScheduleComponent} from './show-schedule/show-schedule.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'schedule', component: ShowScheduleComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'consult', component: ConsultationComponent},
  {path: 'addConsult', component: ScheduleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
