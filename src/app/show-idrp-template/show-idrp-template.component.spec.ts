import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIdrpTemplateComponent } from './show-idrp-template.component';

describe('ShowIdrpTemplateComponent', () => {
  let component: ShowIdrpTemplateComponent;
  let fixture: ComponentFixture<ShowIdrpTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIdrpTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIdrpTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
