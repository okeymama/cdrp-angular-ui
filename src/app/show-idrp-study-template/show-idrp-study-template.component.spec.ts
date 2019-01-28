import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIdrpStudyTemplateComponent } from './show-idrp-study-template.component';

describe('ShowIdrpStudyTemplateComponent', () => {
  let component: ShowIdrpStudyTemplateComponent;
  let fixture: ComponentFixture<ShowIdrpStudyTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIdrpStudyTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIdrpStudyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
