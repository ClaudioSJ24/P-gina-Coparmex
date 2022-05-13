import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliacionComponent } from './components/afiliacion/afiliacion.component';


const routes: Routes = [
  {
    path: '',
    component: AfiliacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliacionRoutingModule { }
