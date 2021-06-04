import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitHeadHeaderComponent } from './unit-head-header.component';

describe('UnitHeadHeaderComponent', () => {
  let component: UnitHeadHeaderComponent;
  let fixture: ComponentFixture<UnitHeadHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitHeadHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitHeadHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
