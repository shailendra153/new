import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './service/Authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authenticate:AuthenticateService, private _router:Router){}

  canActivate(): boolean{
    if(this._authenticate.checkToken()){
      return true;
    }else{
      this._router.navigate(['sign-in']);
      return false;
    }
  }

}
