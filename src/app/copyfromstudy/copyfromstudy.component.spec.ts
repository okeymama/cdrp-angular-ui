import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyfromstudyComponent } from './copyfromstudy.component';

describe('CopyfromstudyComponent', () => {
  let component: CopyfromstudyComponent;
  let fixture: ComponentFixture<CopyfromstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyfromstudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyfromstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
