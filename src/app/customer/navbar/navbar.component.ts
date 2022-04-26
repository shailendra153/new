import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/Authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user_data:any
  constructor(private _router:Router, private _authenticate:AuthenticateService) { 
    this.user_data = localStorage.getItem('user-profile');
    this.user_data = JSON.parse(this.user_data);
  }

  public isLoggedIn(): boolean {
   return this._authenticate.checkToken();
  }

  public signout(){
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('UserLoginId');
    localStorage.removeItem('user-profile');
    localStorage.removeItem('rzp_device_id');
    this._router.navigate(['sign-in']);
  }
  ngOnInit(): void {
  }

}
