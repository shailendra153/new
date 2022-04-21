import { Component, OnInit } from '@angular/core';
import { UpdateDataService } from '../../service/update-data.service';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../service/Authenticate.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  data:any;
  ids: any[]=[];
  constructor(private _update_data:UpdateDataService, private _cart:CartService, private _router:Router, private _authenticate:AuthenticateService) { 
    this.data = this._update_data.getData();
    console.log(this.data);
  }
  userId = localStorage.getItem('UserLoginId'); 
  AddToCart(productId: any) {
    let value:number;
  
    // console.log(productId + " " + this.userID);
    if (this._authenticate.checkToken()) {
      this._cart.FetchCart(localStorage.getItem("UserLoginId")).subscribe(data=>{
        for(let item of data[0].products){
          this.ids.push(item._id)
        }
        console.log(this.ids)
         value=  this.ids.indexOf(productId);
         console.log(value)
        if(value==(-1)){
          this._cart.AddProductInCart(productId, localStorage.getItem("UserLoginId")).subscribe(
            (data) => {
              if (data) {
                alert('Product added Successfully');
              }
            },
            (err) => {
              alert('can not be add');
            }
          );
        }else{alert("Already Added")}  
    
     
    })
    } else {
      this._router.navigate(['sign-in']);
    }
  }
  ngOnInit(): void {
  }

}
