import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McraRequestSearchComponent } from './mcra-request-search/mcra-request-search.component';

export const mcraRequestRoutes: Routes = [
  {
    path:"",
    component: McraRequestSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(mcraRequestRoutes)],
  exports: [RouterModule]
})
export class McraRequestRoutingModule { }
