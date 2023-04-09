import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    FooterLayoutComponent,
    SidebarLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
