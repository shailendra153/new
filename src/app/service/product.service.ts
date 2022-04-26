import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductGetUrl = 'https://artifical.herokuapp.com/product/view-product'
  Url = 'https://artifical.herokuapp.com/product/product-by-id/';
  constructor(private _http:HttpClient) { }

  public ProductList(){
   return this._http.get(this.ProductGetUrl);
  }

  public FetchSingleProduct(ProductID:String){
    return this._http.get(this.Url+ProductID);
  }
  public productByCategory(categoryId:String){
        let url='https://artifical.herokuapp.com/product/view-product-by-categoryId/'+categoryId;
        return this._http.get(url);
  }
}
