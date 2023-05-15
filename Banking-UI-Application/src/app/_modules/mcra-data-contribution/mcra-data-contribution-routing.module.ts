import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';

export const mcraDataContributionRoutes: Routes = [
  {
    path: "",
    component: FileUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(mcraDataContributionRoutes)],
  exports: [RouterModule]
})
export class McraDataContributionRoutingModule { }
