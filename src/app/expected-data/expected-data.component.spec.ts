import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedDataComponent } from './expected-data.component';

describe('ExpectedDataComponent', () => {
  let component: ExpectedDataComponent;
  let fixture: ComponentFixture<ExpectedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpectedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
