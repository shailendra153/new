import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/Authenticate.service';
import { ProductService } from '../../service/product.service';
import { UpdateDataService } from '../../service/update-data.service';
import { CartService } from '../../service/cart.service';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ProductList: any;
  ids:any[]=[];

  constructor(private _authenticate:AuthenticateService, private _router:Router, private _product:ProductService, private _update_data:UpdateDataService, private _cart:CartService,private _favorite:FavoriteService) { 
    this._product.ProductList().subscribe(data => {
      this.ProductList = data;
      console.log(this.ProductList);
    });
  }

  userID = localStorage.getItem('UserLoginId');
  AddToFavorite(productId: any) {
    let value:number;
 
    // console.log(productId + " " + this.userID);
    if (this._authenticate.checkToken()) {
      this._favorite.FetchFavorite(localStorage.getItem("UserLoginId")).subscribe(data=>{
        console.log(data)
        if(data.length==0){
          this._favorite.AddProductInFavorite(productId, localStorage.getItem("UserLoginId")).subscribe(
            (data) => {
              if (data) {
                alert('Product added Successfully');
              }
            });
        }
        else{
          
        for(let item of data[0].products){
          this.ids.push(item._id)
        }
        console.log(this.ids)
         value=  this.ids.indexOf(productId);
         console.log(value)
        if(value==(-1)){
          this._favorite.AddProductInFavorite(productId, localStorage.getItem("UserLoginId")).subscribe(
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
        } 
   
     
    })
    } else {
      this._router.navigate(['sign-in']);
    }
  }










  AddToCart(productId: any) {
    let value:number;
 
    // console.log(productId + " " + this.userID);
    if (this._authenticate.checkToken()) {
      this._cart.FetchCart(localStorage.getItem("UserLoginId")).subscribe(data=>{
        console.log(data)
        if(data.length==0){
          this._cart.AddProductInCart(productId, localStorage.getItem("UserLoginId")).subscribe(
            (data) => {
              if (data) {
                alert('Product added Successfully');
              }
            });
        }
        else{
          
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
        } 
   
     
    })
    } else {
      this._router.navigate(['sign-in']);
    }
  }

  public SingleProductId(Id: String) {
    this._product.FetchSingleProduct(Id).subscribe(data => {
      console.log(data);
      this._update_data.setData(data);
      this._router.navigate(['signle-product'])
    })
  }
  ngOnInit(): void {
  }

}
