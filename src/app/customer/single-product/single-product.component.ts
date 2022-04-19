import { Component, OnInit } from '@angular/core';
import { UpdateDataService } from '../../service/update-data.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  data:any;
  constructor(private _update_data:UpdateDataService) { 
    this.data = this._update_data.getData();
    console.log(this.data);
  }

  
  ngOnInit(): void {
  }

}
