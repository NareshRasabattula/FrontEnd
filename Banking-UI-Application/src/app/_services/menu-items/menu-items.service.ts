import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { UserDetails } from 'src/app/_models/userDetails';
import { ConstantService } from '../constant.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor(private http: HttpClient, private constantService : ConstantService) { }

  public getMenuJson(): Observable<any> {
    return this.http.get(this.constantService.menuItems);
  }

  public getUserGroupJSON(): Observable<any> {
    return this.http.get(this.constantService.userGroup);
  }

  public getUserDetailsFromSessionStorage(): UserDetails {
    return new UserDetails(sessionStorage.getItem('userDetails'));
  }
}
