import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { McraRequestRoutingModule } from './mcra-request-routing.module';
import { McraRequestComponent } from './mcra-request.component';
import { McraRequestSearchComponent } from './mcra-request-search/mcra-request-search.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    McraRequestComponent,
    McraRequestSearchComponent
  ],
  imports: [
    CommonModule,
    McraRequestRoutingModule,
    AngularMaterialModule
  ]
})
export class McraRequestModule { }
