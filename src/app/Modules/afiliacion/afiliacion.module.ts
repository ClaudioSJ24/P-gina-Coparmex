import { MaterialUiModule } from './../material-ui/material-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionRoutingModule } from './afiliacion-routing.module';

import { AfiliacionComponent } from './components/afiliacion/afiliacion.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    
    AfiliacionComponent
  ],
  imports: [
    CommonModule,
    AfiliacionRoutingModule,
    FlexLayoutModule,
    MaterialUiModule
  ]
})
export class AfiliacionModule { }
