import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { UpdateDataService } from '../../service/update-data.service';

declare var Razorpay: any
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  data: any;
  total: number = 0;
  qty: any[] = [];
  name: any = "";
  email: any = "";
  address: any = "";
  state: any = "";
  country: any = "India";
  mobile: any = "";
  constructor(private _cart: CartService, private router: Router, private _toastr:ToastrService,private activateRoute:ActivatedRoute) {
  }

  amount: any;

  onpay() {
    console.log(localStorage.getItem('UserLoginId'))
    this._cart.createOrder(this.total).subscribe(data => {
      console.log(data);
      var options = {
        "key": "rzp_test_gdzLmWFRzOIDAm",
        "amount": "1000", 
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": data.id, 
        'handler': (response: any) => {
          alert("payment Success")

            

          this._cart.placeOrder(this.name, this.email, this.address, this.mobile, response.razorpay_order_id, response.razorpay_payment_id, this.data, this.total).subscribe(data => {
             this._cart.deleteCart(this.cartId).subscribe(data => {
              console.log("order placed");
              this.router.navigate(['home'])

            
              this.router.events.subscribe(event=>{
                if(event instanceof NavigationEnd){
                
                  window.location.reload();
                  
                }
              });

             })
          });
        },

        "prefill": {
          "name": this.name,
          "email": this.email,
          "contact": this.mobile
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }

      };


      var rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open()

    })

  }
  cartId: String = "";
  ngOnInit(): void {
    this._cart.FetchCart(localStorage.getItem('UserLoginId')).subscribe(data => {
      this.data = data[0].products;
      this.cartId = data[0]._id;
      for (let item of this.data) {
        item.total = item.productPrice;
        this.total += item.productPrice * 1;
      }

    })

  }

  value(e: any, name: string, index: number) {
    this.total = 0;
    let value = e.target.value;
    this.data[index].total = (this.data[index].productPrice * 1) * (value * 1);
    for (let item of this.data)
      this.total += item.total;


  }
  
}




