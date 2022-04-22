import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  

  AddToFavoriteUrl:any = "https://artifical.herokuapp.com/cart/add-product"
  ViewFavoriteUrl:any = "https://artifical.herokuapp.com/cart/view-cart";
  RemoveProductUrl:any = "https://artifical.herokuapp.com/cart/remove-product";

  constructor(private _http:HttpClient) { }

  public AddProductInFavorite(productID: string, userID: any) {
    // let jtwToken = localStorage.getItem('jwt_token')
   return this._http.post<any>(this.AddToFavoriteUrl,{productId:productID, userId:userID});
  }

  public FetchFavorite(UserID:any) {
   return this._http.post<any>(this.ViewFavoriteUrl,{userId:UserID});
  }

  public removeProduct(ProductId:any,userId:any){
    return this._http.post(this.RemoveProductUrl,{productId:ProductId,cartId:userId});
  }
}
