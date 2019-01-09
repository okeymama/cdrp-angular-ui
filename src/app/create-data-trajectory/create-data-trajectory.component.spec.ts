import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataTrajectoryComponent } from './create-data-trajectory.component';

describe('CreateDataTrajectoryComponent', () => {
  let component: CreateDataTrajectoryComponent;
  let fixture: ComponentFixture<CreateDataTrajectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDataTrajectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDataTrajectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
