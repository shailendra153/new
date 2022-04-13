import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticateService {


  singupUrlApi = 'https://artifical.herokuapp.com/signup';
  SigninUrlApi = 'https://artifical.herokuapp.com/signin';
  constructor(private _http: HttpClient) { }

  public register(name: string, email: string, mobile: string, password: string) {
    return this._http.post<any>(this.singupUrlApi, { name: name, email: email, mobile: mobile, password: password });
  }

  public login(email: string, password: string) {
    return this._http.post<any>(this.SigninUrlApi,{customerEmail: email, customerPassword: password});
  }

  public checkToken(){
    return !!localStorage.getItem('jwtToken')
  }
}
