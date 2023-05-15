import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { McraDcrRequestRoutingModule } from './mcra-dcr-request-routing.module';
import { McraDcrRequestComponent } from './mcra-dcr-request.component';
import { McraDcrSearchComponent } from './mcra-dcr-search/mcra-dcr-search.component';


@NgModule({
  declarations: [
    McraDcrRequestComponent,
    McraDcrSearchComponent
  ],
  imports: [
    CommonModule,
    McraDcrRequestRoutingModule
  ]
})
export class McraDcrRequestModule { }
