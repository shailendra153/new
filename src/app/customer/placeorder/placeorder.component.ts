import { Component, OnInit } from '@angular/core';
import { UpdateDataService } from '../../service/update-data.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  data:any;
  qty:any[]=[];
  constructor(private _update:UpdateDataService) {
    this.data=this._update.getData();
    console.log(this.data)
   }

  ngOnInit(): void {
  }

}
