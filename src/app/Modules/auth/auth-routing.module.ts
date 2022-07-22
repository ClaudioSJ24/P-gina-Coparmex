import { LoginCComponent } from 'src/app/Modules/auth/pages/login-c/login-c.component';
import { RegisterComponent } from 'src/app/Modules/auth/pages/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path: 'registro',
    
    component: RegisterComponent
  },

  {
    path: 'sesion',
    
    component: LoginCComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
