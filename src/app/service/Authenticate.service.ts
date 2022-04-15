import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthenticateService {
  singupUrlApi = 'https://artifical.herokuapp.com/signup';
  SigninUrlApi = 'https://artifical.herokuapp.com/signin';
  constructor(private _http: HttpClient) { }

  public register(name: string, email: string, mobile: string, password: string) {
    return this._http.post<any>(this.singupUrlApi, { name: name, email: email, mobile: mobile, password: password });
  }

  public login(email: string, password: string):Observable<any> {
    return this._http.post<any>(this.SigninUrlApi,{email: email, password: password});
  }

  public checkToken(){
    return !!localStorage.getItem('jwt_token')
  }
}
