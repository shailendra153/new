import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/Authenticate.service';
import { CartService } from 'src/app/service/cart.service';
import { FavoriteService } from 'src/app/service/favorite.service';
import { UpdateDataService } from 'src/app/service/update-data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  product:any[] = [];
  ids:any[]=[];
  cartId:string|undefined;
  constructor(private _favorite:FavoriteService,private _update :UpdateDataService,private _router:Router,private _cart:CartService,private _authenticate:AuthenticateService) {
    this._favorite.FetchFavorite(localStorage.getItem('UserLoginId')).subscribe((data)=>{
        this.cartId=data[0]._id;
      this.product=data[0].products
      console.log('this is testing cart');
      // console.log(data[0].products);
      // console.log(this.product[0].productName)
    })
  }
  AddToCart(productId: any) {
    let value:number
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


  userId = localStorage.getItem("UserLoginId");
  removeproduct(productid:any,index:number){
   if(confirm("Are you Sure")){
    this._favorite.removeProduct(productid,this.cartId).subscribe((data)=>{
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
  
  ngOnInit(): void {
  }

}
