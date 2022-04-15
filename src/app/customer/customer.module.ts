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
import { AuthenticateService } from '../service/Authenticate.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenIntercepterService } from '../service/token-intercepter.service';
// import { AuthenticateService } from './Authenticate.service';




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
    CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
})
export class CustomerModule { }
