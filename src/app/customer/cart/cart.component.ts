import { Component, OnInit } from '@angular/core';
// import { join } from 'path';
import { CartService } from '../../service/cart.service';
import { UpdateDataService } from '../../service/update-data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:any[] = []
  cartId:string|undefined;
  constructor(private _cart:CartService,private _update :UpdateDataService,private _router:Router) {
    this._cart.FetchCart(localStorage.getItem('UserLoginId')).subscribe((data)=>{
        this.cartId=data[0]._id;
      this.product=data[0].products
      console.log('this is testing cart');
      // console.log(data[0].products);
      // console.log(this.product[0].productName)
    })
  }

  userId = localStorage.getItem("UserLoginId");
  removeproduct(productid:any,index:number){
    if(confirm("Are you Sure")){
     this._cart.removeProduct(productid,this.cartId).subscribe((data)=>{
       console.log(localStorage.getItem("UserLoginId"))
         if(data){
           alert('removed')
           this.product.splice(index,1);
         }else{
           alert('not remove');
         }
     })
    }
   }
  cart_product:any;
  public PlaceOrder(){
    this._update.setData(this.product);
    this._router.navigate(['place-order']);
    
    
  }
  ngOnInit(): void {
  }

}
