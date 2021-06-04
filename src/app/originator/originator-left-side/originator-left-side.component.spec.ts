import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginatorLeftSideComponent } from './originator-left-side.component';

describe('OriginatorLeftSideComponent', () => {
  let component: OriginatorLeftSideComponent;
  let fixture: ComponentFixture<OriginatorLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginatorLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginatorLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
