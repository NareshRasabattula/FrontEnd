import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccManagementFileUploadComponent } from './acc-management-file-upload/acc-management-file-upload.component';

export const accManagementUploadRoutes: Routes = [
  {
    path:"",
    component: AccManagementFileUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(accManagementUploadRoutes)],
  exports: [RouterModule]
})
export class AccManagementUploadsRoutingModule { }
