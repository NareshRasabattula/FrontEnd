import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingHomePageComponent } from './landing-home-page/landing-home-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingHomePageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    AngularMaterialModule
  ]
})
export class LandingPageModule { }
