import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeCComponent } from './components/home-c/home-c.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';




@NgModule({
  declarations: [SideNavComponent, HomeCComponent, HomeComponent, InicioComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialUiModule,
    FlexLayoutModule ,
    IvyCarouselModule
  ],
  exports: [
    SideNavComponent
  ]
})
export class SharedModule { }
