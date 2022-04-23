import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor{
 
  constructor() { }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    let tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer'+localStorage.getItem('jwt-token')
      }
    });
    return next.handle(tokenizedRequest);
  }
}
 
 

