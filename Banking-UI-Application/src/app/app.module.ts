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
    LayoutModule
    
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
