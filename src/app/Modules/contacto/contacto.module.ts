import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoCComponent } from './components/contacto-c/contacto-c.component';


@NgModule({
  declarations: [
    ContactoCComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
