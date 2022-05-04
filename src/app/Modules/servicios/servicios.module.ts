import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosCComponent } from './components/servicios-c/servicios-c.component';


@NgModule({
  declarations: [
    ServiciosCComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
