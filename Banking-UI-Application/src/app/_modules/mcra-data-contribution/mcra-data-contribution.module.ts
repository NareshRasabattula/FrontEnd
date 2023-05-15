import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { McraDataContributionRoutingModule } from './mcra-data-contribution-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { McraDataContributionComponent } from './mcra-data-contribution.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    FileUploadComponent,
    McraDataContributionComponent
  ],
  imports: [
    CommonModule,
    McraDataContributionRoutingModule,
    AngularMaterialModule
  ],
})
export class McraDataContributionModule { }
