import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/Authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router, private _authenticate:AuthenticateService) { }

  public isLoggedIn(): boolean {
   return this._authenticate.checkToken();
  }

  public signout(){
    localStorage.removeItem('jwt_token');
    this._router.navigate(['sign-in']);
  }
  ngOnInit(): void {
  }

}
