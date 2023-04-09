import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/_services/header.service';
import { ConstantService } from 'src/app/_services/constant.service';

@Component({
  selector: 'app-landing-page',
  template: "<router-outlet></router-outlet>"
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
   
  }

  
}
