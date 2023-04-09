import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/_services/constant.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  constructor(private constantService: ConstantService){ }
  currentYear: number=new Date().getFullYear();
  internalUse = this.constantService.forInternalUse;
  ngOnInit(): void {
  }

}
