import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualassignsubjectComponent } from './manualassignsubject.component';

describe('ManualassignsubjectComponent', () => {
  let component: ManualassignsubjectComponent;
  let fixture: ComponentFixture<ManualassignsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualassignsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualassignsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
