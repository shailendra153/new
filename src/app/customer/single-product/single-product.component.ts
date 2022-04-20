import { Component, OnInit } from '@angular/core';
import { UpdateDataService } from '../../service/update-data.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  data:any;
  constructor(private _update_data:UpdateDataService, private _cart:CartService) { 
    this.data = this._update_data.getData();
    console.log(this.data);
  }
  userID = localStorage.getItem('UserLoginId'); 
  AddToCart(productId:any){
    // console.log(productId + " " + this.userID);
    this._cart.AddProductInCart(productId,this.userID).subscribe((data)=>{
      if(data){
        alert('Product added Successfully');
      }
    },(err)=>{
      alert('can not be add');
    })
  }
  ngOnInit(): void {
  }

}
