import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymmetricKeySearchComponent } from './symmetric-key-search.component';

describe('SymmetricKeySearchComponent', () => {
  let component: SymmetricKeySearchComponent;
  let fixture: ComponentFixture<SymmetricKeySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymmetricKeySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymmetricKeySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
