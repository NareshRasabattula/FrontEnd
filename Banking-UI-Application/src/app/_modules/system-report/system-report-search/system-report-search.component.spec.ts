import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemReportSearchComponent } from './system-report-search.component';

describe('SystemReportSearchComponent', () => {
  let component: SystemReportSearchComponent;
  let fixture: ComponentFixture<SystemReportSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemReportSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemReportSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
