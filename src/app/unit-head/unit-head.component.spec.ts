import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { UnitHeadComponent } from './unit-head.component';
import { UnitHeadHeaderComponent } from './unit-head-header/unit-head-header.component';
import { UnitHeadLeftSideComponent } from './unit-head-left-side/unit-head-left-side.component';
import { UnitHeadContentComponent } from './unit-head-content/unit-head-content.component';
import { UnitHeadFooterComponent } from './unit-head-footer/unit-head-footer.component';
import { UnitHeadControlSidebarComponent } from './unit-head-control-sidebar/unit-head-control-sidebar.component';

describe('unit-headComponent', () => {
  let component: unit-headComponent;
  let fixture: ComponentFixture<unit-headComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UnitHeadComponent,
        UnitHeadHeaderComponent,
        UnitHeadLeftSideComponent,
        UnitHeadContentComponent,
        UnitHeadFooterComponent,
        UnitHeadControlSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(UnitHeadComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Page Header');
  }));
});
