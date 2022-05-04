import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosCComponent } from './components/nosotros-c/nosotros-c.component';


const routes: Routes = [

  {
    path: '',
    component: NosotrosCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
