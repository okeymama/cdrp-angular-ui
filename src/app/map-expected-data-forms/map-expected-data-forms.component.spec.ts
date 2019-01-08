import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapExpectedDataFormsComponent } from './map-expected-data-forms.component';

describe('MapExpectedDataFormsComponent', () => {
  let component: MapExpectedDataFormsComponent;
  let fixture: ComponentFixture<MapExpectedDataFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapExpectedDataFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapExpectedDataFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
