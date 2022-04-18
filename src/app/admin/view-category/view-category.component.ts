import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import{UpdateDataService} from '../../service/update-data.service'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  CategoryList:any;
  constructor(private _category: CategoryService, private _route:Router,private updateService:UpdateDataService) {
    this._category.CategoryList().subscribe(data =>{
      console.log(data);
      this.CategoryList = data;
    })
  }

  deleteCategory(categoryId:string, index:number){
    this._category.deteleCategory(categoryId).subscribe(data=>{
      if(data){
        console.log(data);
        this.CategoryList.splice(index, 1);
        alert("category deleted");
        
      }else{
        alert("category not found");
      }
    })
  }
  updateCategory(id:String,i:Number){
    this._category.singleCategory(id).subscribe(data=>{
      this.updateService.setData(data);
      this._route.navigate(["admin/update-category"]);
    })
    

  }

  ngOnInit(): void {
   

  }

}
