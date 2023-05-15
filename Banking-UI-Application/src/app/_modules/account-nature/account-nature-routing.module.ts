import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

export const accountNatureRoutes: Routes = [
  {
    path:"",
    component:AccountComponent
  },
  {
    path:"account",
    component:AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(accountNatureRoutes)],
  exports: [RouterModule]
})
export class AccountNatureRoutingModule { }
