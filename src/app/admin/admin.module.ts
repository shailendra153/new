import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
// import { ErrorpageComponent } from './errorpage/errorpage.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AdminComponent,
    SigninComponent,
    DashboardComponent,
    AddCategoryComponent,
    AddProductComponent,
    ViewCategoryComponent,
    ViewProductComponent,
    UpdateCategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AdminModule { }
