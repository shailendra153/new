import { Component, OnInit } from '@angular/core';
import { UpdateDataService } from '../../service/update-data.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
    data:any;
  constructor(private updateService:UpdateDataService) { 
  this.data=  this.updateService.getData();
  console.log(this.data)
  }

  ngOnInit(): void {
  }

}
