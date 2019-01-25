import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdrpchecktemplateComponent } from './idrpchecktemplate.component';

describe('IdrpchecktemplateComponent', () => {
  let component: IdrpchecktemplateComponent;
  let fixture: ComponentFixture<IdrpchecktemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdrpchecktemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdrpchecktemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
