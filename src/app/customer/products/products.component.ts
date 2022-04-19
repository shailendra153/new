import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/Authenticate.service';
import { ProductService } from '../../service/product.service';
import { UpdateDataService } from '../../service/update-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ProductList: any;

  constructor(private _authenticate:AuthenticateService, private _router:Router, private _product:ProductService, private _update_data:UpdateDataService) { 
    this._product.ProductList().subscribe(data => {
      this.ProductList = data;
    });
  }
  addToCart(){
    if(this._authenticate.checkToken()){
      alert('added successful');
    }else{
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
