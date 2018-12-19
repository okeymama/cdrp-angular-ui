import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedVisitsComponent } from './applied-visits.component';

describe('AppliedVisitsComponent', () => {
  let component: AppliedVisitsComponent;
  let fixture: ComponentFixture<AppliedVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
