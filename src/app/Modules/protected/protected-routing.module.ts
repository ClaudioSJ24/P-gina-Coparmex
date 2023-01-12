import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService as guard } from 'src/app/Guards/guard.service';

import { NuevoSocioComponent } from './components/socios/nuevo/nuevo-socio/nuevo-socio.component';
import { NuevoUsuarioComponent } from './components/usuarios/nuevo-usuario/nuevo-usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
             
  },
  {
    path: 'partners/save',
    component:  NuevoSocioComponent,
    canActivate: [guard], data: {expectedRol: ['admin']} 
  },
  {
    path: 'partners/update/:id',
    component:  NuevoSocioComponent,
    canActivate: [guard], data: {expectedRol: ['admin']} 
  },
  
  {
    path: 'users/save',
    component:  NuevoUsuarioComponent,
     
  },
  
  {
    path: 'users/update/:id',
    component:  NuevoUsuarioComponent,
    canActivate: [guard], data: {expectedRol: ['admin']} 
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
