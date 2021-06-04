import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginatorControlSidebarComponent } from './originator-control-sidebar.component';

describe('OriginatorControlSidebarComponent', () => {
  let component: OriginatorControlSidebarComponent;
  let fixture: ComponentFixture<OriginatorControlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginatorControlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginatorControlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
