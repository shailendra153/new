import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categoryImage:any;
  categoryName:any;
  constructor(private _category:CategoryService) { }

  public select(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.categoryImage = file
    }
  }

  public upload(){
    let formData = new FormData();
    formData.append("categoryName",this.categoryName);
    formData.append("categoryImage",this.categoryImage);
    this._category.addCategory(formData).subscribe(data =>{
      if(data){
        alert('category added successfully');
      }else{
        alert('category not added');
      }
    })

  }

  ngOnInit(): void {
  }

}
