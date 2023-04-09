import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from "rxjs";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ConstantService } from '../constant.service';
import { EnvService } from 'src/app/env.service';
import { User } from 'src/app/_models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   
   private userSubject: BehaviorSubject<User>;
   public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private constantService: ConstantService,
    private env: EnvService
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
   }

   public get userValue():User{
    return this.userSubject.value;
   }

   login(username: any,password: any){
    return this.http.post<User>('${this.env.apiUrl}/login',{username,password})
    .pipe(map(user => {
      //store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }))
   }

   public loginAccess(formData: any): Observable<any>{
    console.log(this.env.apiUrl);
    return this.http.post(this.env.apiUrl + this.constantService.login, formData);
   }

   saveUserDetailsInSessionStorage(decodeToken: any, date: any){
      sessionStorage.setItem("userDetails", JSON.stringify(decodeToken.userGroup));
      sessionStorage.setItem("userName", JSON.stringify(decodeToken.userName));
      sessionStorage.setItem("userId", JSON.stringify(decodeToken.userId));
      sessionStorage.setItem("date", JSON.stringify(decodeToken.date));
   }
}
