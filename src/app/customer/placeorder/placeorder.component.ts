import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { UpdateDataService } from '../../service/update-data.service';

declare var Razorpay:any
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  data:any;
  total:number=0;
  qty:any[]=[];
  constructor(private _cart:CartService) {
  }

  amount:any;
  
  onpay(){
    
    this._cart.createOrder(this.total).subscribe(data=>{
      console.log(data);
      var options = {
        "key": "rzp_test_gdzLmWFRzOIDAm", // Enter the Key ID generated from the Dashboard
        "amount": "1000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://artifical.herokuapp.com/order-status",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "6264241510"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
    })
  }

  ngOnInit(): void {
    this._cart.FetchCart(localStorage.getItem('UserLoginId')).subscribe(data=>{
      this.data=data[0].products;
      for(let item of this.data){
        item.total=item.productPrice;
        this.total+=item.productPrice*1;
        }
      
    })
  
    

   }
   
   value(e:any,name:string,index:number){
     this.total=0;
     let value=e.target.value;
     this.data[index].total=(this.data[index].productPrice*1)*(value*1);
     for(let item of this.data)
     this.total+=item.total;
     

   }
  }


