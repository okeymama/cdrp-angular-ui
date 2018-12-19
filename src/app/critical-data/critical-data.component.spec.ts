import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalDataComponent } from './critical-data.component';

describe('CriticalDataComponent', () => {
  let component: CriticalDataComponent;
  let fixture: ComponentFixture<CriticalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
