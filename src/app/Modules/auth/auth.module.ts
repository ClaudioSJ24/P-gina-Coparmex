import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './pages/register/register.component';
import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { LoginCComponent } from './pages/login-c/login-c.component';
import { MainCComponent } from './pages/main-c/main-c.component';
import { HttpClientModule } from '@angular/common/http';





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
    
    HttpClientModule
    
  ]
})
export class AuthModule { }
