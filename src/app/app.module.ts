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
    GalleryComponent
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
