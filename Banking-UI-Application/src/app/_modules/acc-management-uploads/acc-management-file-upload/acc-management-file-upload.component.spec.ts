import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccManagementFileUploadComponent } from './acc-management-file-upload.component';

describe('AccManagementFileUploadComponent', () => {
  let component: AccManagementFileUploadComponent;
  let fixture: ComponentFixture<AccManagementFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccManagementFileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccManagementFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
