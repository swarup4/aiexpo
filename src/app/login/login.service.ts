import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signup(data: any){
    return this.http.post(environment.host + '/user/signup', data);
  }

  login(data: any){
    return this.http.post(environment.host + '/user/login', data);
  }
}
