import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SymmetricKeySearchComponent } from './symmetric-key-search/symmetric-key-search.component';

export const symmetricKeyRoutes: Routes = [
  {
    path:"",
    component: SymmetricKeySearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(symmetricKeyRoutes)],
  exports: [RouterModule]
})
export class SymmetricKeyRoutingModule { }
