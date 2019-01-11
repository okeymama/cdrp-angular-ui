import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdatacategoryComponent } from './editdatacategory.component';

describe('EditdatacategoryComponent', () => {
  let component: EditdatacategoryComponent;
  let fixture: ComponentFixture<EditdatacategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdatacategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdatacategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
