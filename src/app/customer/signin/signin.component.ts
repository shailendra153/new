import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticateService } from '../../service/Authenticate.service';
import {SocialAuthService,GoogleLoginProvider} from 'angularx-social-login'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string='';
  password: string='';
  constructor(private _authenticate:AuthenticateService, private _router:Router,private socialService:SocialAuthService) { }

  public signin(){
    this._authenticate.login(this.email,this.password).subscribe((data) => {

      if(data.status){
        localStorage.setItem('jwt_token',data.token);
        localStorage.setItem('UserLoginId',data.result._id);
         this._router.navigate(['home']);
      }else{
        console.log("not found")
      }
    },err=>{
      if(err instanceof HttpErrorResponse){
          if(err.status==500)
            window.alert("Internal Server Error");
      }
    })
  }
  public signinWithGoogle(){
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.socialService.authState.subscribe(data=>{
      this._authenticate.signinWithGoogle(data.email).subscribe(userData=>{
        if(userData.status){
          localStorage.setItem('jwt_token',userData.token);
          localStorage.setItem('UserLoginId',userData.result._id);
           this._router.navigate(['home']);
        }else{
          alert("not found");
        }
        },err=>{
          alert("Email not found please Sign up");
          this._router.navigate(["sign-up"]);
        })
    })
    
  }

  ngOnInit(): void {
  }

}
