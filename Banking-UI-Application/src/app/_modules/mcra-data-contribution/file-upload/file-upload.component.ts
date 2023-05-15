import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit{
  
  displaySuccessMessage : string;
  displayErrorMessage: string;
  errorMessage: string;
  mcraDataContribution: FormGroup;
  defaultFileTypeValue: 'DS';
  fileTypeDropDown : any[] = [
    {value: 'DS', viewValue: 'Data Submission Batch File'}
  ];
  constructor() {}
  ngOnInit() {
    fileType:[this.defaultFileTypeValue]
  }

}
