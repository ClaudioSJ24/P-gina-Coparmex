import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosCComponent } from './components/servicios-c/servicios-c.component';

const routes: Routes = [
  {
    path: '',
    component: ServiciosCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
