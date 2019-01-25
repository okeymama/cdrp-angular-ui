import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyApplicableVisitsComponent } from './modify-applicable-visits.component';

describe('ModifyApplicableVisitsComponent', () => {
  let component: ModifyApplicableVisitsComponent;
  let fixture: ComponentFixture<ModifyApplicableVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyApplicableVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyApplicableVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
