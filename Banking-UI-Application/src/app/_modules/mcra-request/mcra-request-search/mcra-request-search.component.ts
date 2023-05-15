import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mcra-request-search',
  templateUrl: './mcra-request-search.component.html',
  styleUrls: ['./mcra-request-search.component.css']
})
export class McraRequestSearchComponent implements OnInit{

  displaySuccessMessage:string;
  displayErrorMessage:string;
  errorMessage:string;
  mcraSearch: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.mcraSearch = this.fb.group({
      fileType:['', Validators.required]
    })
    
  }
  

}
