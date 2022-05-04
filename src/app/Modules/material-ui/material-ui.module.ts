import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


const materialUi = [
  LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialUi
  ],
  exports: [
    materialUi
  ]
})
export class MaterialUiModule { }
