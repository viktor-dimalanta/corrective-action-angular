import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitHeadLeftSideComponent } from './unit-head-left-side.component';

describe('UnitHeadLeftSideComponent', () => {
  let component: UnitHeadLeftSideComponent;
  let fixture: ComponentFixture<UnitHeadLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitHeadLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitHeadLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
