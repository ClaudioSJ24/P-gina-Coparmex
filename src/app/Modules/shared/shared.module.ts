import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { InicioComponent } from './components/inicio/inicio.component';
import { CarrouselSComponent } from './components/carrousel-s/carrousel-s.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [SideNavComponent, InicioComponent, CarrouselSComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialUiModule,
    FlexLayoutModule ,
    IvyCarouselModule,
    YouTubePlayerModule
    
     
  ],
  exports: [
    SideNavComponent,
    CarrouselSComponent
  ]
})
export class SharedModule { }
