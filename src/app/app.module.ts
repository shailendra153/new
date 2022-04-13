import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import  { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import {HttpClientModule} from '@angular/common/http'
// import { AuthenticateService } from './customer/Authenticate.service';

// import { AngularFontAwesomeModule} from 'angular-font-awesome'
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CustomerModule,
    FormsModule,
    HttpClientModule
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
