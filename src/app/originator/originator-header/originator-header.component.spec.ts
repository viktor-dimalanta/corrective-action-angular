import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginatorHeaderComponent } from './originator-header.component';

describe('OriginatorHeaderComponent', () => {
  let component: OriginatorHeaderComponent;
  let fixture: ComponentFixture<OriginatorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginatorHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginatorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
