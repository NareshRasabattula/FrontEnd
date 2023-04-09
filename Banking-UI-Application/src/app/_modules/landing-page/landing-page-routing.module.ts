import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingHomePageComponent } from './landing-home-page/landing-home-page.component';

export const landingPageRoutes: Routes = [
  {
    path:"",
    component: LandingHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(landingPageRoutes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
