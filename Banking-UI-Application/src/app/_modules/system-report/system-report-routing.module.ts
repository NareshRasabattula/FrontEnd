import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemReportSearchComponent } from './system-report-search/system-report-search.component';

export const systemReportRoutes: Routes = [
  {
    path:"",
    component: SystemReportSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(systemReportRoutes)],
  exports: [RouterModule]
})
export class SystemReportRoutingModule { }
