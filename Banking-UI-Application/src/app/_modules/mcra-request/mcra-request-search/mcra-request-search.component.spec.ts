import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McraRequestSearchComponent } from './mcra-request-search.component';

describe('McraRequestSearchComponent', () => {
  let component: McraRequestSearchComponent;
  let fixture: ComponentFixture<McraRequestSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McraRequestSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McraRequestSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
