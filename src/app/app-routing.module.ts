import { NgModule, Component } from '@angular/core';
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
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ViewCategoryComponent } from './admin/view-category/view-category.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { SingleProductComponent } from './customer/single-product/single-product.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';

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
        path : "signle_product",
        component : SingleProductComponent
      }
    ]
  },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: 'add-category', component: AddCategoryComponent},
      { path: 'add-product', component: AddProductComponent,canActivate:[AuthGuard]},
      { path: 'view-category', component: ViewCategoryComponent},
      { path: 'view-product', component: ViewProductComponent},
      { path: "sign-in", component: adminSignin },
      {path:"update-category",component:UpdateCategoryComponent}
      
    ]
  },
  { path: '**', component: PageNoteFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
