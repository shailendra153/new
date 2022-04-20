import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:any[] = [];
  constructor(private _cart:CartService) {
    this._cart.FetchCart(localStorage.getItem('UserLoginId')).subscribe((data)=>{
      
      this.product=data[0].products
      console.log(data[0].products);
      console.log(this.product[0].productName)
    })
  }
  removeproduct(productid:any){
    console.log(productid);
    this._cart.removeProduct(productid).subscribe((data)=>{
        if(data){
          alert('removed')
        }else{
          alert('not remove');
        }
    })
  }
  ngOnInit(): void {
  }

}
