import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
