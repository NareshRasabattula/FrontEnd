import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/_services/alert/alert.service';
import  jwt_decode from 'jwt-decode';
import { DatePipe } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import * as moment from "moment";
import { ConstantService } from 'src/app/_services/constant.service';
import { UserIdleService } from "angular-user-idle";
import { AccountService } from 'src/app/_services/account/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private constantService : ConstantService,
    private accountService: AccountService,
    private datePipe: DatePipe,
    private userIdleService : UserIdleService,

  ){

  }

  bank_logo_url = "assets/img/bank_logo.png";
  displayErrorMessage: boolean = false;
  errorMessage: string;
  loginForm: FormGroup;
  inputErrorMessage = {
    username: this.constantService.wrongUsername,
    password: this.constantService.worngPassword
  };
  isSubmitted: boolean = false;
  loading = false;
  returnUrl: string;
  date = new Date();


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: [
        "",
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern("^[0-9]+$")
        ]
      ],
      password: ["", Validators.required]
    });
  }


  //get access from formFields
  get f(){
    return this.loginForm.controls;
    console.log(this.loginForm.controls);
  }

  onSubmit():void {
    this.isSubmitted = true;
    this.displayErrorMessage = false;
    //reset alerts on submit
    this.alertService.clear();

    //stop if form is invalid
    if(this.loginForm.invalid){
      return;
    }
    this.loading = true;
    this.accountService.loginAccess(this.loginForm.value).subscribe(
      response => {
        console.log(response);
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem(
          "lastLoginDate",
          !!response.data.lastLoginDate
          ? moment(new Date(response.data.lastLoginDate)).format(
            "MM/DD/YYYY HH:mm:ss"
          )
          :""
        );
        const decodedToken = jwt_decode(response.data.token);
        this.accountService.saveUserDetailsInSessionStorage(
          decodedToken,
          this.datePipe.transform(this.date, "yyyy-MM-dd")
        );
        this.router.navigate(["landing-page"]);
        this.startWatch();
      },
      err => {
        this.loading = false;
        this.displayErrorMessage = true;
        if(err.statusText == this.constantService.unknownError){
          this.errorMessage = this.constantService.serviceFailure;
        }else{
          this.errorMessage = err.console.error.message;
        }
      }
    );
    }

  startWatch() {
    this.userIdleService.resetTimer();
    this.userIdleService.startWatching();
    this.userIdleService.onTimerStart().subscribe(count =>{});
    this.userIdleService.onTimeout().subscribe(() => {
      this.userIdleService.stopTimer();
      this.userIdleService.stopWatching();
      this.redirect();
    });
  }

   redirect(){
    sessionStorage.clear();
    this.router.navigate(["login"]);
   }
}
