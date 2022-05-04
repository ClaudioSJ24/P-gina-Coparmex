import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoCComponent } from './components/contacto-c/contacto-c.component';

const routes: Routes = [
  {
    path: '',
    component: ContactoCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
