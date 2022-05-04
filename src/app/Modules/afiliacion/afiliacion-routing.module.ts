import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliacionCComponent } from './components/afiliacion-c/afiliacion-c.component';

const routes: Routes = [
  {
    path: '',
    component: AfiliacionCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliacionRoutingModule { }
