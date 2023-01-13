import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    
  },
  {
    path: 'partners/update/:id',
    component:  NuevoSocioComponent,
    
  },
  
  {
    path: 'users/save',
    component:  NuevoUsuarioComponent,
     
  },
  
  {
    path: 'users/update/:id',
    component:  NuevoUsuarioComponent,
    
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
