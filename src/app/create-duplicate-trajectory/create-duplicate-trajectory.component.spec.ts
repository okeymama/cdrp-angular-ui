import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDuplicateTrajectoryComponent } from './create-duplicate-trajectory.component';

describe('CreateDuplicateTrajectoryComponent', () => {
  let component: CreateDuplicateTrajectoryComponent;
  let fixture: ComponentFixture<CreateDuplicateTrajectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDuplicateTrajectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDuplicateTrajectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
