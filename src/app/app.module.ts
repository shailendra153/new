import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomerModule } from './customer/customer.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticateService } from './service/Authenticate.service';
import { TokenIntercepterService } from './service/token-intercepter.service';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { DeleteComponent } from './customer/UserComponent/delete/delete.component';
import { ProfileComponent } from './customer/UserComponent/profile/profile.component';
import { EditComponent } from './customer/UserComponent/edit/edit.component';
import { NeclacesComponent } from './customer/categoryComponents/neclaces/neclaces.component';
import { EaringComponent } from './customer/categoryComponents/earing/earing.component';
import { RingComponent } from './customer/categoryComponents/ring/ring.component';
import { TikaComponent } from './customer/categoryComponents/tika/tika.component';
import { CoronetComponent } from './customer/categoryComponents/coronet/coronet.component';
import { ChainsComponent } from './customer/categoryComponents/chains/chains.component';
import { BraceletsComponent } from './customer/categoryComponents/bracelets/bracelets.component';
import { BanglesComponent } from './customer/categoryComponents/bangles/bangles.component';
import { AnkletsComponent } from './customer/categoryComponents/anklets/anklets.component';
import { NosePinComponent } from './customer/categoryComponents/nose-pin/nose-pin.component';
import { RajputiBorlaComponent } from './customer/categoryComponents/rajputi-borla/rajputi-borla.component';
import { BajubandComponent } from './customer/categoryComponents/bajuband/bajuband.component';
import { ToeRingsComponent } from './customer/categoryComponents/toe-rings/toe-rings.component';
import { ElegantBroochesComponent } from './customer/categoryComponents/elegant-brooches/elegant-brooches.component';
import { HairsBroochesComponent } from './customer/categoryComponents/hairs-brooches/hairs-brooches.component';
import { PandentsComponent } from './customer/categoryComponents/pandents/pandents.component';
import { FlowerJewelleryComponent } from './customer/categoryComponents/flower-jewellery/flower-jewellery.component';
import { BridalKalireComponent } from './customer/categoryComponents/bridal-kalire/bridal-kalire.component';
import { BridalBanglesComponent } from './customer/categoryComponents/bridal-bangles/bridal-bangles.component';
import { CategoryComponent } from './customer/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNoteFoundComponent,
    DeleteComponent,
    ProfileComponent,
    EditComponent,
    NeclacesComponent,
    EaringComponent,
    RingComponent,
    TikaComponent,
    CoronetComponent,
    ChainsComponent,
    BraceletsComponent,
    BanglesComponent,
    AnkletsComponent,
    NosePinComponent,
    RajputiBorlaComponent,
    BajubandComponent,
    ToeRingsComponent,
    ElegantBroochesComponent,
    HairsBroochesComponent,
    PandentsComponent,
    FlowerJewelleryComponent,
    BridalKalireComponent,
    BridalBanglesComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(  { timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true}),
  ],
  providers: [AuthenticateService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
