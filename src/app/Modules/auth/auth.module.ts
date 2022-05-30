import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { LoginCComponent } from './pages/login-c/login-c.component';
import { MainCComponent } from './pages/main-c/main-c.component';




@NgModule({
  declarations: [
   
    RegisterComponent,
        LoginCComponent,
        MainCComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialUiModule,
    
  ]
})
export class AuthModule { }
