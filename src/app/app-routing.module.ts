import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SingleProductComponent } from './customer/single-product/single-product.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';

const routes: Routes = [
  {
    path: "", component: CustomerComponent, children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "products",
        component: ProductsComponent
      },
      {
        path: "about-us",
        component: AboutComponent
      },
      {
        path: "contact-us",
        component: ContactComponent
      },
      {
        path: "search",
        component: SearchbarComponent
      },
      {
        path: "cart",
        component: CartComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "favorite",
        component: FavoriteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "sign-in",
        component: SigninComponent
      },
      {
        path: "sign-up",
        component: SignupComponent
      },
      {
        path : "signle-product",
        component : SingleProductComponent
      }
    ]
  },
  
  { path: '**', component: PageNoteFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
