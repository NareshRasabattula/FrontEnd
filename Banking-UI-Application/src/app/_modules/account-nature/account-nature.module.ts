import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AccountNatureRoutingModule } from './account-nature-routing.module';
import { AccountNatureComponent } from './account-nature.component';
import { AccountComponent } from './account/account.component';
import { ThrobberComponent } from './throbber/throbber.component';


@NgModule({
  declarations: [
    AccountNatureComponent,
    AccountComponent,
    ThrobberComponent
  ],
  imports: [
    CommonModule,
    AccountNatureRoutingModule,
    AngularMaterialModule
  ]
})
export class AccountNatureModule { }
