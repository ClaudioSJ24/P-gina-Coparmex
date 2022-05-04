import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosCComponent } from './components/eventos-c/eventos-c.component';


@NgModule({
  declarations: [
    EventosCComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
