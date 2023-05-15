import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account/account.service';
import { MenuItemsService } from 'src/app/_services/menu-items/menu-items.service';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/_models/userDetails';
import { ConstantService } from 'src/app/_services/constant.service';
import { DateFormatterService } from 'src/app/_services/date-formatter.service';
import { LogoutReq } from 'src/app/_models/LogoutReq';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  [x: string]: any;
  bank_logo = "assets/img/bank_logo.png";
  menuItems: any[] =[];
  userGroup: any[] =[];
  userDetails: UserDetails;
  menuList: any[] = [];
  userName:string;
  accessList: any[] = [];
  date:any;
  lastLoginDate: any;
  logoutReq: LogoutReq;

  constructor(
    private router: Router, 
    private menuItemsService: MenuItemsService, 
    private dateFormatter: DateFormatterService,
    private accountService: AccountService,
    private constantService : ConstantService){}

  ngOnInit(): void {
    this.menuItemsService.getMenuJson().subscribe(result => {
    this.menuList = result;
    this.userName = JSON.parse(sessionStorage.getItem("userName")!);
    this.userDetails = JSON.parse(sessionStorage.getItem("userDetails")!);
    this.lastLoginDate = sessionStorage.getItem("lastLoginDate");
    this.date = this.dateFormatter.writedate();
    this.userGroup = Object.keys(this.userDetails).filter(e => this.userDetails[e as keyof UserDetails] === true);
    this.menuItems = this.menuList.filter(e =>{
      if(this.userGroup.includes(e.id)){
        return e;
      }else{
        if(e.title == this.constantService.downloadRequestHeader && (this.userDetails['creditInfoDownloadRequestBIU']
        || this.userDetails['creditInfoDownloadRequestCRM'] || this.userDetails['creditInfoDownloadRequestMort'])){
        return e;
        }
      }
    });
    var list = {};
    this.menuItems.map(e => {
      list[e.link] = true
    });
    sessionStorage.setItem("accessMenuItems", JSON.stringify(list));
    this.date = this.dateFormatter.writedate();

    })
  }
 
  logout(){}
  
}
