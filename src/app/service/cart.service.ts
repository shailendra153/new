import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  AddToCartUrl:any = "https://artifical.herokuapp.com/cart/add-product"
  ViewCartUrl:any = "https://artifical.herokuapp.com/cart/view-cart";
  RemoveProductUrl:any = "https://artifical.herokuapp.com/cart/remove-product";

  constructor(private _http:HttpClient) { }

  public AddProductInCart(productID: string, userID: any) {
    // let jtwToken = localStorage.getItem('jwt_token')
   return this._http.post<any>(this.AddToCartUrl,{productId:productID, userId:userID});
  }

  public FetchCart(UserID:any) {
   return this._http.post<any>(this.ViewCartUrl,{userId:UserID});
  }

  public removeProduct(ProductId:any,userId:any){
    return this._http.post(this.RemoveProductUrl,{productId:ProductId,cartId:userId});
  }
  orderApi  = "https://artifical.herokuapp.com/order"

  public createOrder(amount:any):Observable<any>
  {
      return this._http.post<any>(this.orderApi, {amount:amount});
  }
}
