import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetrajectoryComponent } from './deletetrajectory.component';

describe('DeletetrajectoryComponent', () => {
  let component: DeletetrajectoryComponent;
  let fixture: ComponentFixture<DeletetrajectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetrajectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetrajectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
