import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
<<<<<<< HEAD
import { ForgotComponent } from './forgot/forgot.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
=======
>>>>>>> c3d7ded3bd564c6e70253952945342e092530b15

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'admin',component:AdminComponent
  },
<<<<<<< HEAD
  {
    path:'forgot',component:ForgotComponent
  },
  
  {
    path:'otpverification',component:OtpverificationComponent
  },
  {
    path:'newpassword',component:NewpasswordComponent
  }
=======
>>>>>>> c3d7ded3bd564c6e70253952945342e092530b15
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
