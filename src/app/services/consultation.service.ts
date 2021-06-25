import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import User from '../model/user.model';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import Consult from '../model/consult.model';

@Injectable({providedIn: 'root'})

export class ConsultationService {
  private REST_SERVER = 'http://localhost:8080/consult';

  constructor(private http: HttpClient, private router: Router) {
  }

  getUser(id: number): Observable<Consult>{
    return this.http.get<Consult>(this.REST_SERVER + `/id?consultId=${id}`);
  }

  getConsults(): Observable<Consult[]> {
    return this.http.get<Consult[]>(this.REST_SERVER + '/all');
  }

  addConsult(consult: any): Observable<unknown> {
    return this.http.post(this.REST_SERVER + '/save', consult);
  }

  deleteConsult(id: number): Observable<unknown> {
    return this.http.delete(this.REST_SERVER + `/delete?consultId=${id}`);
  }
}
