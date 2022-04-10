import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './customer/about/about.component';
import { CartComponent } from './customer/cart/cart.component';
import { CustomerComponent } from './customer/customer.component';
import { FavoriteComponent } from './customer/favorite/favorite.component';
import { HomeComponent } from './customer/home/home.component';
import { ProductsComponent } from './customer/products/products.component';
import { SearchbarComponent } from './customer/searchbar/searchbar.component';
import { SigninComponent } from './customer/signin/signin.component';
import { SignupComponent } from './customer/signup/signup.component';

const routes: Routes = [
  {path:"",component:CustomerComponent,children:[
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"aboutus",component:AboutComponent},
  {path:"search",component:SearchbarComponent},
  {path:"cart",component:CartComponent},
  {path:"favorite",component:FavoriteComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent}

  ]},
  {path:"admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
