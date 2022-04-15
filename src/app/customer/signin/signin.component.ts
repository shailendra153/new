import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticateService } from '../../service/Authenticate.service';

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

      if(data.status){
        localStorage.setItem('jwt_token',data.token)
         this._router.navigate(['home']);
      }

    },err=>{
      if(err instanceof HttpErrorResponse){
          if(err.status==500)
            window.alert("Internal Server Error");
      }
    })
  }

  ngOnInit(): void {
  }

}
