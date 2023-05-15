import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SymmetricKeyRoutingModule } from './symmetric-key-routing.module';
import { SymmetricKeyComponent } from './symmetric-key.component';
import { SymmetricKeySearchComponent } from './symmetric-key-search/symmetric-key-search.component';


@NgModule({
  declarations: [
    SymmetricKeyComponent,
    SymmetricKeySearchComponent
  ],
  imports: [
    CommonModule,
    SymmetricKeyRoutingModule,
    AngularMaterialModule
  ]
})
export class SymmetricKeyModule { }
