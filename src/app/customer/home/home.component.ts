import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CategoryList:any;
  ProductList:any;
  constructor(private _category: CategoryService, private _product:ProductService, ) { }


  public SingleProductId(Id:String){
    this._product.FetchSingleProduct(Id).subscribe(data=>{
      console.log(data);

    })
  }
  ngOnInit(): void {
    this._category.CategoryList().subscribe(data=>{
      this.CategoryList = data.slice(0,5);
    });

    this._product.ProductList().subscribe(data=>{
      this.ProductList = data;
    })
  }

}
