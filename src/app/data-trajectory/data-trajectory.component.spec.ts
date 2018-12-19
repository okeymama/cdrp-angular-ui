import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTrajectoryComponent } from './data-trajectory.component';

describe('DataTrajectoryComponent', () => {
  let component: DataTrajectoryComponent;
  let fixture: ComponentFixture<DataTrajectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTrajectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTrajectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
