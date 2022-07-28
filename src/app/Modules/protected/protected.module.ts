import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { SociosComponent } from './components/socios/socios.component';
import { NoSociosComponent } from './components/no-socios/no-socios.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    SociosComponent,
    NoSociosComponent,
    EventosComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    FlexLayoutModule,
    MaterialUiModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
