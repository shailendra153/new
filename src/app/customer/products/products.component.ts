import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/Authenticate.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _authenticate:AuthenticateService, private _router:Router) { }
  addToCart(){
    if(this._authenticate.checkToken()){
      alert('added successful');
    }else{
      this._router.navigate(['sign-in']);
    }
  }
  ngOnInit(): void {
  }

}
