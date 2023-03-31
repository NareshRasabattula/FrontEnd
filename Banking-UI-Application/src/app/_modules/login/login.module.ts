import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginRoutingModule } from './login-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LoginRoutingModule,
    AngularMaterialModule
    
  ],
  exports: [
    AngularMaterialModule
  ],
})
export class LoginModule { }
