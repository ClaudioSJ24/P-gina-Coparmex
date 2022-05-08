import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';


@NgModule({
  declarations: [
   NosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    FlexLayoutModule,
    IvyCarouselModule,
    MaterialUiModule
  ]
})
export class NosotrosModule { }
