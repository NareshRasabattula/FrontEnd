import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  displaySuccessMessage:string;
  displayErrorMessage:string;
  errorMessage:string;
  hideContent: boolean = false;
  accountNatureSearchFromGroup: FormGroup;
  constructor() {}
  ngOnInit(){
  }

}
