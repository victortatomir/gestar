import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import User from '../model/user.model';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})

export class UserService {
  private REST_SERVER = 'http://localhost:8080/user';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(username: string, password: string): Observable<unknown> {
    return this.http.get<User>(this.REST_SERVER + `/login?username=${username}&password=${password}`).pipe(map(res => {
      localStorage.setItem('user', JSON.stringify(res));
      console.log(res);
      return res;
    }));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.REST_SERVER + `/all`);
  }

  registerUser(body: User): Observable<User> {
    return this.http.post<User>(this.REST_SERVER + '/save', body);
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}
