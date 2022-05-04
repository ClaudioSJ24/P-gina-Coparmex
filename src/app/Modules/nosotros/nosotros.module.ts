import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosCComponent } from './components/nosotros-c/nosotros-c.component';


@NgModule({
  declarations: [
    NosotrosCComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
