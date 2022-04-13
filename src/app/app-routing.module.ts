import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './customer/about/about.component';
import { CartComponent } from './customer/cart/cart.component';
import { ContactComponent } from './customer/contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { FavoriteComponent } from './customer/favorite/favorite.component';
import { HomeComponent } from './customer/home/home.component';
import { ProductsComponent } from './customer/products/products.component';
import { SearchbarComponent } from './customer/searchbar/searchbar.component';
import { SigninComponent } from './customer/signin/signin.component';
import { SignupComponent } from './customer/signup/signup.component';
import { SigninComponent as adminSignin } from './admin/signin/signin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "", component: CustomerComponent, children: [
      {
        path: "", component: HomeComponent,

      },
      { path: "home", component: HomeComponent },
      { path: "products", component: ProductsComponent,
      canActivate:[AuthGuard] },
      { path: "about-us", component: AboutComponent },
      { path: "contact-us", component: ContactComponent },
      { path: "search", component: SearchbarComponent },
      { path: "cart", component: CartComponent },
      { path: "favorite", component: FavoriteComponent },
      { path: "sign-in", component: SigninComponent },
      { path: "sign-up", component: SignupComponent }

    ]
  },
  { path: "admin", component: AdminComponent, children:[
    { path:"", component: DashboardComponent},
    { path: "sign-in", component:adminSignin }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
