import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosCComponent } from './components/eventos-c/eventos-c.component';

const routes: Routes = [
  {
    path: '',
    component: EventosCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
