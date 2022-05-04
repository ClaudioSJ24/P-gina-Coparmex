import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Modules/shared/components/inicio/inicio.component';


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
    loadChildren: () => import('../app/Modules/contacto/contacto.module').then(m => m.ContactoModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
