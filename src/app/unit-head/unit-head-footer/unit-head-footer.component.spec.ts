import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitHeadFooterComponent } from './unit-head-footer.component';

describe('UnitHeadFooterComponent', () => {
  let component: UnitHeadFooterComponent;
  let fixture: ComponentFixture<UnitHeadFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitHeadFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitHeadFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
