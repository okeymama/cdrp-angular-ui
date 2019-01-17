import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdrpChecksComponent } from './add-idrp-checks.component';

describe('AddFormsComponent', () => {
  let component: AddIdrpChecksComponent;
  let fixture: ComponentFixture<AddIdrpChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIdrpChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIdrpChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
