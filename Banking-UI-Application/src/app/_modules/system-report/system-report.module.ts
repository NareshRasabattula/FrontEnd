import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemReportRoutingModule } from './system-report-routing.module';
import { SystemReportComponent } from './system-report.component';
import { SystemReportSearchComponent } from './system-report-search/system-report-search.component';


@NgModule({
  declarations: [
    SystemReportComponent,
    SystemReportSearchComponent
  ],
  imports: [
    CommonModule,
    SystemReportRoutingModule
  ]
})
export class SystemReportModule { }
