import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { ProductService } from '../../service/product.service';
import { AuthenticateService } from '../../service/Authenticate.service';
import { CartService } from '../../service/cart.service';
import { FavoriteService } from '../../service/favorite.service';
import { UpdateDataService } from '../../service/update-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  CategoryList:any;
  productList:any;
  categoryId:String="";
  ids:any;
  status:any=0;


  constructor(private _category:CategoryService,
    private _product :ProductService,
     private _authenticate:AuthenticateService,
     private _cart:CartService,
     private _favorite:FavoriteService,
      private _update_data:UpdateDataService,private _router:Router
     ) {
  
   }

  Category(id:any){
    this.status=1;
    this.categoryId=id;
    this.ngOnInit();
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
 
  ngOnInit(): void {
    this._category.CategoryList().subscribe((data)=>{
      this.CategoryList = data;
  } )
if(this.status==1){
  this._product.productByCategory(this.categoryId).subscribe(data=>{
    this.productList=data;
  })
}
  else{
    this._product.ProductList().subscribe(data=>{
      this.productList=data;
    })
  }

 

  }

}
