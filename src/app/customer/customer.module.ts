import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SingleProductComponent } from './single-product/single-product.component';
import {SocialLoginModule,GoogleLoginProvider} from 'angularx-social-login';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
 const socialProvider={
   provide:"SocialAuthServiceConfig",
   useValue:{
     providers:[{
       id:GoogleLoginProvider.PROVIDER_ID,
       provider:new GoogleLoginProvider('565614006599-9svodm815pv44rg2tnetm5qhmr4irvju.apps.googleusercontent.com')
     }]
   }
 };



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    FavoriteComponent,
    SearchbarComponent,
    CustomerComponent,
    SingleProductComponent,
    PlaceorderComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule

  ],
  providers: [socialProvider],
})
export class CustomerModule { }
