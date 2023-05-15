import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AccManagementUploadsRoutingModule } from './acc-management-uploads-routing.module';
import { AccManagementUploadsComponent } from './acc-management-uploads.component';
import { AccManagementFileUploadComponent } from './acc-management-file-upload/acc-management-file-upload.component';


@NgModule({
  declarations: [
    AccManagementUploadsComponent,
    AccManagementFileUploadComponent
  ],
  imports: [
    CommonModule,
    AccManagementUploadsRoutingModule,
    AngularMaterialModule
  ]
})
export class AccManagementUploadsModule { }
