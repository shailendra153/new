import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from '../../service/product.service';
import { UpdateDataService } from '../../service/update-data.service';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { FavoriteService} from '../../service/favorite.service'
import { AuthenticateService } from '../../service/Authenticate.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  CategoryList: any[]=[];
  ids: string[]=[];
  ProductList: any;
  constructor(
    private _category: CategoryService,
    private _product: ProductService,
    private _update_data: UpdateDataService,
    private _router: Router,
    private _cart: CartService,
    private _authenticate: AuthenticateService,
    private _favorite:FavoriteService
    
  ) {
    this._category.CategoryList().subscribe((data) => {
      this.CategoryList = data;
    });
 
    this._product.ProductList().subscribe((data) => {
      this.ProductList = data;
    });
  }
 
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
 
  public SingleProductId(Id: string) {
    this._product.FetchSingleProduct(Id).subscribe((data) => {
      console.log(data);
      this._update_data.setData(data);
      this._router.navigate(['single-product']);
    });
  }
  ngOnInit(): void {}
}
 

