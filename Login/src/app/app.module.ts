import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ContectComponent } from './contect/contect.component';
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD
import { ForgotComponent } from './forgot/forgot.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { RouterLinkActive } from '@angular/router';
=======
>>>>>>> c3d7ded3bd564c6e70253952945342e092530b15

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    ContectComponent,
<<<<<<< HEAD
    AdminComponent,
    ForgotComponent,
    OtpverificationComponent,
    NewpasswordComponent  
=======
    AdminComponent
>>>>>>> c3d7ded3bd564c6e70253952945342e092530b15
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
<<<<<<< HEAD
    
    
=======
>>>>>>> c3d7ded3bd564c6e70253952945342e092530b15
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
