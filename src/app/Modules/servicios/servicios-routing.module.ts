import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiosCComponent } from './components/beneficios-c/beneficios-c.component';


const routes: Routes = [
  {
    path: '',
    component: BeneficiosCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
