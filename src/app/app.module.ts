import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';




  const appRoutes:Routes=[
    {
      path:"",component:LoginComponent
    },
    {
path:"home",component:HomeComponent
    },
    {
      path:"boys",component:BoysComponent
    },
    {
      path:"girls",component:GirlsComponent
    },
    {
      path:"gallery",component:GalleryComponent
    },
    {
      path:"order",component:OrderComponent
    },
    {
      path:"payment",component:PaymentComponent
    },
    {
      path:"about",component:AboutComponent
    },
    {
      path:"contact",component:ContactComponent
    },
    {
      path:"logout",component:LogoutComponent
    }
  ]
    
  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    BoysComponent,
    GirlsComponent,
    GalleryComponent,
    OrderComponent,
    PaymentComponent,
    AboutComponent,
    ContactComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
