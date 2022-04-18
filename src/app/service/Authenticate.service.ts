import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthenticateService {
  singupUrlApi = 'https://artifical.herokuapp.com/signup';
  SigninUrlApi = 'https://artifical.herokuapp.com/signin';
  // adminSigninUrl = 'https://artifical.herokuapp.com/admin/signin'
  adminSigninUrl = 'http://localhost:3000/admin/signin'
  constructor(private _http: HttpClient) { }

  public register(name: string, email: string, mobile: string, password: string) {
    return this._http.post<any>(this.singupUrlApi, { name: name, email: email, number: mobile, password: password });
  }

  public login(email: string, password: string):Observable<any> {
    return this._http.post<any>(this.SigninUrlApi,{email: email, password: password});
  }

  public adminLogin(email: string, password: string):Observable<any> {
    return this._http.post<any>(this.adminSigninUrl,{email: email, password: password});
  }

  public checkToken(){
    return !!localStorage.getItem('jwt_token');
  }
  public signinWithGoogle(email:String){
    let url="https://artifical.herokuapp.com/signin-with-google";
    return this._http.post<any>(url,{email:email})
  }

  
}
