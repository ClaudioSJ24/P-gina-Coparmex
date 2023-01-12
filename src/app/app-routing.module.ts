import { ProtectedModule } from './Modules/protected/protected.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoModule } from '../app/Modules/contacto/contacto.module';
import { InicioComponent } from './Modules/shared/components/inicio/inicio.component';
import { MainCComponent } from './Modules/auth/pages/main-c/main-c.component';
import { GuardService as guard} from './Guards/guard.service';//Permite el acceso a determinadas rutas de acuerdo al rol



const routes: Routes = [

  {
    path: '',
    component: InicioComponent
  },

  {
    path: 'nosotros',
    loadChildren: () => import('../app/Modules/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path:'beneficios',
    loadChildren: () => import('../app/Modules/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'afiliacion',
    loadChildren: () => import('../app/Modules/afiliacion/afiliacion.module').then(m => m.AfiliacionModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('../app/Modules/eventos/eventos.module').then(m => m.EventosModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('../app/Modules/contacto/contacto.module').then(m => ContactoModule)
  },
  {
    path: 'auth',
    component:MainCComponent,
    
    loadChildren: () => import('../app/Modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/Modules/protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [guard], data: {expectedRol: ['admin', 'user']} 
    //canActivate: [guard], data: {expectedRol: ['admin', 'partner']}


  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' //Permite regresar al inicio de la pagina en el momento de navegar a la misma
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
