import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AdminComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AdminModule { }
