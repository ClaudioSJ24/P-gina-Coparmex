import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';

import { BeneficiosCComponent } from './components/beneficios-c/beneficios-c.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    
    BeneficiosCComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FlexLayoutModule,
    SharedModule
    
  ]
})
export class ServiciosModule { }
