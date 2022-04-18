import { Component, OnInit } from '@angular/core';
import { AuthenticateService} from '../../service/Authenticate.service'
import { Router} from '@angular/router'
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:string='';
  email:string='';
  mobile:string='';
  password:string='';

  constructor( private _auth:AuthenticateService, private _router:Router,private socialService:SocialAuthService) { }

  public signup(){
    this._auth.register(this.name,this.email,this.mobile,this.password).subscribe((data)=>{
      if(data){
        console.log(data);
        this._router.navigate(['sign-in']);
      }else{
        alert('not register');
      }
    })
  }
  

  ngOnInit(): void {
  }

}
