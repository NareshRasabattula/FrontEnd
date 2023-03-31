import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/_services/alert/alert.service';
import * as jwt_decode from "jwt-decode";
import { DatePipe } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import * as moment from "moment";
import { ConstantService } from 'src/app/_services/constant.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private roter: Router,
    private alertService: AlertService,
    private constantService : ConstantService,
    //private datePipe: DatePipe,

  ){

  }

  bank_log_url = "assets/img/bank_logo.png";
  displayErrorMessage: boolean = false;
  errorMessage: string;
  loginForm: FormGroup;
  inputErrorMessage = {
    username: this.constantService.wrongUsername,
    password: this.constantService.worngPassword
  };
  isSubmitted: boolean = false;
  loading = false;

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

  onSubmit(){ }
}
