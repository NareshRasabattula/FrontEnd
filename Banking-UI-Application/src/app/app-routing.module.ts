import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_modules/login/login.component';
import { loginRoutes } from './_modules/login/login-routing.module';
import { LandingPageComponent } from './_modules/landing-page/landing-page.component';
import { landingPageRoutes } from './_modules/landing-page/landing-page-routing.module';
import { MainLayoutComponent } from './_modules/layout/main-layout/main-layout.component';
import { mcraDataContributionRoutes } from './_modules/mcra-data-contribution/mcra-data-contribution-routing.module'
import { mcraRequestRoutes } from './_modules/mcra-request/mcra-request-routing.module';
import { mcraDcrReqquestRoutes } from './_modules/mcra-dcr-request/mcra-dcr-request-routing.module';
import { symmetricKeyRoutes } from './_modules/symmetric-key/symmetric-key-routing.module';
import { systemReportRoutes } from './_modules/system-report/system-report-routing.module';
import { accManagementUploadRoutes } from './_modules/acc-management-uploads/acc-management-uploads-routing.module';
import { accountNatureRoutes } from './_modules/account-nature/account-nature-routing.module';


const routes: Routes = [
  {
    path:"",
    component: LoginComponent,
    children:[
      {
        path:"",
        children: [...loginRoutes]
      }
    ]
  },
  {
    path:"",
    component: MainLayoutComponent,
    children: [
      {
        path:"landing-page",
        children: [...landingPageRoutes]
      },
      {
        path:"mcra-data-contribution",
        children: [...mcraDataContributionRoutes]
      },
      {
        path:"mcra-request",
        children: [...mcraRequestRoutes]
      },
      {
        path:"mcra-dcr-request",
        children: [...mcraDcrReqquestRoutes]
      },
      {
        path:"symmetric-key",
        children: [...symmetricKeyRoutes]
      },
      {
        path:"system-report",
        children: [...systemReportRoutes]
      },
      {
        path:"acc-managment-uploads",
        children: [...accManagementUploadRoutes]
      },
      {
        path:"acount-nature",
        children: [...accountNatureRoutes]
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
