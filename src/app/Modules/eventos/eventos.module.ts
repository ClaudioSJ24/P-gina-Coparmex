import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';

import { EventosComponent } from './components/eventos/eventos.component';


@NgModule({
  declarations: [
    
    EventosComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    FlexLayoutModule
  ]
})
export class EventosModule { }
