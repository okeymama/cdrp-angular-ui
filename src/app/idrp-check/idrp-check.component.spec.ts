import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdrpCheckComponent } from './idrp-check.component';

describe('IdrpCheckComponent', () => {
  let component: IdrpCheckComponent;
  let fixture: ComponentFixture<IdrpCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdrpCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdrpCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
