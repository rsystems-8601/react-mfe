import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';

export interface AuthData {
  username:string,
  password:string,
}

@Injectable({
  providedIn: 'root'
})

export class AuthserviceService {

  heroesUrl = "http://testing.com/v1";
  constructor(protected http: HttpClient) { }

  checkLogin(hero: AuthData): Observable<AuthData> {
    return this.http.post<AuthData>(this.heroesUrl, hero);
  } 
}
