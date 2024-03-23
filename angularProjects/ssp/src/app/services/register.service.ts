import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
export interface AuthData {
  username: string;
  password: string;
}

@Injectable()
export class RegisterService {
  heroesUrl = 'http://testing.com/v1';

  constructor(protected http: HttpClient) {}

  checkLogin(hero: AuthData): Observable<AuthData> {
    return this.http.post<AuthData>(this.heroesUrl, hero);
  }
}
