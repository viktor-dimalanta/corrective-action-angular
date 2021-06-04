import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginatorFooterComponent } from './originator-footer.component';

describe('OriginatorFooterComponent', () => {
  let component: OriginatorFooterComponent;
  let fixture: ComponentFixture<OriginatorFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginatorFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginatorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
