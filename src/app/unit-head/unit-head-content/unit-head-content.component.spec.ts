import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitHeadContentComponent } from './unit-head-content.component';

describe('UnitHeadContentComponent', () => {
  let component: UnitHeadContentComponent;
  let fixture: ComponentFixture<UnitHeadContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitHeadContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitHeadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
