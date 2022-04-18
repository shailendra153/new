import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  addCategoryPostUrl = 'https://artifical.herokuapp.com/category/add-category';
  categoryListGetUrl = 'https://artifical.herokuapp.com/category/view-category';
  deteleCategoryPostUrl = 'https://artifical.herokuapp.com/category/delete-category/';
  constructor(private _http:HttpClient) { }

  public addCategory(formData:any){
  return this._http.post<any>(this.addCategoryPostUrl,formData);
  }

  public CategoryList(){
   return this._http.get<any>(this.categoryListGetUrl);
  }

  public deteleCategory(categoryId:string){
    return this._http.get(this.deteleCategoryPostUrl+categoryId);
  }
  public singleCategory(categoryId:String){

    let url ="https://artifical.herokuapp.com/category/category-by-id/"+categoryId;
    return this._http.get(url);
  }
}
