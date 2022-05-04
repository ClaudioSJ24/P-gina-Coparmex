import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionRoutingModule } from './afiliacion-routing.module';
import { AfiliacionCComponent } from './components/afiliacion-c/afiliacion-c.component';


@NgModule({
  declarations: [
    AfiliacionCComponent
  ],
  imports: [
    CommonModule,
    AfiliacionRoutingModule
  ]
})
export class AfiliacionModule { }
