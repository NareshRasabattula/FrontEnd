import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConstantService } from 'src/app/_services/constant.service';
import { HeaderService } from 'src/app/_services/header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  navigationHeader: string;
  pageName: String;
  subscription : Subscription;
  constructor(private constantService:ConstantService, public headerService:HeaderService){}
  
  ngOnInit(): void {
    this.navigationHeader = this.constantService.navigationLink;
    this.subscription = this.headerService.subscribeMessage().subscribe(pageName => {
     if(pageName){
      this.pageName = pageName;
     }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.headerService.clearMessage();
  }

}
