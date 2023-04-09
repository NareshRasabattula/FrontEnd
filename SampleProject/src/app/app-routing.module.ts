import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_modules/login/login.component';
import { loginRoutes } from './_modules/login/login-routing.module';
import { LandingPageComponent } from './_modules/landing-page/landing-page/landing-page.component';

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
    component: LandingPageComponent,
    children:[
      {
        path:"landing-page",
        children: [...loginRoutes]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
