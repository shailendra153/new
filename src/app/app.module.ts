import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import  { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
// import { SigninComponent } from './customer/signin/signin.component';
// import { AuthenticateService } from './customer/Authenticate.service';

// import { AngularFontAwesomeModule} from 'angular-font-awesome'
import { AuthenticateService } from './service/Authenticate.service';
import { TokenIntercepterService } from './service/token-intercepter.service';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNoteFoundComponent
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
  providers: [AuthenticateService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
