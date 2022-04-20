import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from '../../service/product.service';
import { UpdateDataService } from '../../service/update-data.service';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { AuthenticateService } from '../../service/Authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  CategoryList: any;
  ProductList: any;
  constructor(
    private _category: CategoryService,
    private _product: ProductService,
    private _update_data: UpdateDataService,
    private _router: Router,
    private _cart: CartService,
    private _authenticate: AuthenticateService
  ) {
    this._category.CategoryList().subscribe((data) => {
      this.CategoryList = data.slice(0, 5);
    });

    this._product.ProductList().subscribe((data) => {
      this.ProductList = data;
    });
  }
  userID = localStorage.getItem('UserLoginId');
  AddToCart(productId: any) {
    // console.log(productId + " " + this.userID);
    if (this._authenticate.checkToken()) {
      this._cart.AddProductInCart(productId, this.userID).subscribe(
        (data) => {
          if (data) {
            alert('Product added Successfully');
          }
        },
        (err) => {
          alert('can not be add');
        }
      );
    } else {
      this._router.navigate(['sign-in']);
    }
  }

  public SingleProductId(Id: String) {
    this._product.FetchSingleProduct(Id).subscribe((data) => {
      console.log(data);
      this._update_data.setData(data);
      this._router.navigate(['signle-product']);
    });
  }
  ngOnInit(): void {}
}
