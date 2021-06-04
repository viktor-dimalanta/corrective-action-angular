import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginatorContentComponent } from './originator-content.component';

describe('OriginatorContentComponent', () => {
  let component: OriginatorContentComponent;
  let fixture: ComponentFixture<OriginatorContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginatorContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginatorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
