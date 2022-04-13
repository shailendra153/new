import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticateService } from '../Authenticate.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string='';
  password: string='';
  constructor(private _authenticate:AuthenticateService, private _router:Router) { }

  public signin(){

    this._authenticate.login(this.email,this.password).subscribe((data) => {
      if(data){
        alert('Login successful');
        this._router.navigate(['home']);
      }else{
        alert('Login failed');
      }
    })
  }

  ngOnInit(): void {
  }

}
