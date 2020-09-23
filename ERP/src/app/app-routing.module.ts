import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentadmissionComponent } from './studentadmission/studentadmission.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },

  {
    path:'studentadmission',component:StudentadmissionComponent
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
