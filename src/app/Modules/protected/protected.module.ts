import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { ProtectedRoutingModule } from './protected-routing.module';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { MaterialUiModule } from '../material-ui/material-ui.module';
import { SociosComponent } from './components/socios/socios.component';
import { NoSociosComponent } from './components/no-socios/no-socios.component';
import { EventosComponent } from './components/eventos/eventos.component';

import { NuevoSocioComponent } from './components/socios/nuevo/nuevo-socio/nuevo-socio.component';




@NgModule({
  declarations: [
    DashboardComponent,
    SociosComponent,
    NoSociosComponent,
    EventosComponent,
    NuevoSocioComponent,
    
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    FlexLayoutModule,
    MaterialUiModule,
    ReactiveFormsModule,
    RouterModule,
    SweetAlert2Module
  ]
})
export class ProtectedModule { }
