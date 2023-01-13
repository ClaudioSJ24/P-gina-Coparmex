import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactoRoutingModule } from './contacto-routing.module';

import { ContactoComponent } from './components/contacto/contacto.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';



@NgModule({
  declarations: [
    
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactoRoutingModule,
    FlexLayoutModule,
    MaterialUiModule,
    
  ]
})
export class ContactoModule { }
