import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpectedDataComponent } from './add-expected-data.component';

describe('AddExpectedDataComponent', () => {
  let component: AddExpectedDataComponent;
  let fixture: ComponentFixture<AddExpectedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpectedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpectedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
