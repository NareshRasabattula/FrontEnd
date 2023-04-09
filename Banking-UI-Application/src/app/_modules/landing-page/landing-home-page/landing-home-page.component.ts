import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/_services/constant.service';
import { HeaderService } from 'src/app/_services/header.service';

@Component({
  selector: 'app-landing-home-page',
  templateUrl: './landing-home-page.component.html',
  styleUrls: ['./landing-home-page.component.css']
})
export class LandingHomePageComponent implements OnInit{

  constructor(public headerService: HeaderService, private constantService:ConstantService){}

  ngOnInit(): void {
    this.headerService.publicMessage(this.constantService.mainPageHeader);
  }

  ngOnDestroy(){
    this.headerService.clearMessage();
  }

}
