import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessruleComponent } from './buisnessrule.component';

describe('BuisnessruleComponent', () => {
  let component: BuisnessruleComponent;
  let fixture: ComponentFixture<BuisnessruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuisnessruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnessruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
