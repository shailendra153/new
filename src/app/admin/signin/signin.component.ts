import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/Authenticate.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string='';
  password: string='';
  constructor(private _authenticate:AuthenticateService, private _router:Router) { }

  signin(){
    // alert(this.email+ "" + this.password);
    this._authenticate.adminLogin(this.email, this.password).subscribe((data) => {
      if(data.status){
        localStorage.setItem('admin_jwt_token',data.token)
        // alert(data.token);
        this._router.navigate(['admin/dashboard']);
      }else{
        alert('wrong email and password');
      }
    })
  }
  ngOnInit(): void {
  }

}
