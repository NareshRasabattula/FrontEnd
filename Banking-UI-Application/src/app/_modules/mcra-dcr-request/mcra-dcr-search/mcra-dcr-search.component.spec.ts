import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McraDcrSearchComponent } from './mcra-dcr-search.component';

describe('McraDcrSearchComponent', () => {
  let component: McraDcrSearchComponent;
  let fixture: ComponentFixture<McraDcrSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McraDcrSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McraDcrSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
