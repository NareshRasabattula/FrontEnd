import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McraDcrSearchComponent } from './mcra-dcr-search/mcra-dcr-search.component';

export const mcraDcrReqquestRoutes: Routes = [
  {
    path:"",
    component: McraDcrSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(mcraDcrReqquestRoutes)],
  exports: [RouterModule]
})
export class McraDcrRequestRoutingModule { }
