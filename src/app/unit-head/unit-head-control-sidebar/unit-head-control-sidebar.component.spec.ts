import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitHeadControlSidebarComponent } from './unit-head-control-sidebar.component';

describe('UnitHeadControlSidebarComponent', () => {
  let component: UnitHeadControlSidebarComponent;
  let fixture: ComponentFixture<UnitHeadControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitHeadControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitHeadControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
