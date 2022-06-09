import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';

import { ContactoComponent } from './components/contacto/contacto.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FlexLayoutModule,
    MaterialUiModule,
    FormsModule
  ]
})
export class ContactoModule { }
