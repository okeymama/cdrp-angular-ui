import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataTrajectoryComponent } from './add-data-trajectory.component';

describe('AddDataTrajectoryComponent', () => {
  let component: AddDataTrajectoryComponent;
  let fixture: ComponentFixture<AddDataTrajectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataTrajectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataTrajectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
