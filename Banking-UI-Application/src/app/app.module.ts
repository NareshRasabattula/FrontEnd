import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './_modules/angular-material/angular-material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe, DecimalPipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EnvService } from './env.service';
import { EnvSeriveProvider } from './env.service.provider';
import { TokenInterceptor } from './_shared/interceptors/token.interceptor';
import { LandingPageModule } from './_modules/landing-page/landing-page.module';
import { LayoutModule } from './_modules/layout/layout.module';
import { McraDataContributionModule } from './_modules/mcra-data-contribution/mcra-data-contribution.module';
import { McraRequestModule } from './_modules/mcra-request/mcra-request.module';
import { McraDcrRequestModule } from './_modules/mcra-dcr-request/mcra-dcr-request.module';
import { SymmetricKeyModule } from './_modules/symmetric-key/symmetric-key.module';
import { AccManagementUploadsModule } from './_modules/acc-management-uploads/acc-management-uploads.module';
import { AccountNatureModule } from './_modules/account-nature/account-nature.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    LandingPageModule,
    LayoutModule,
    McraDataContributionModule,
    McraRequestModule,
    McraDcrRequestModule,
    SymmetricKeyModule,
    AccManagementUploadsModule,
    AccountNatureModule
  ],
  exports:[
    ReactiveFormsModule
  ],
  
  providers: [
    EnvSeriveProvider,
  {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi: true},  DatePipe, DecimalPipe,
  {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
