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
import { NuevoSocioComponent } from './components/socios/nuevo/nuevo-socio/nuevo-socio.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './components/usuarios/nuevo-usuario/nuevo-usuario.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NuevoContactoComponent } from './components/contacto/nuevo-contacto/nuevo-contacto.component';




@NgModule({
  declarations: [
    DashboardComponent,
    SociosComponent,
        
    NuevoSocioComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    ContactoComponent,
    NuevoContactoComponent,
    
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
