import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { OriginatorComponent } from './originator.component';
import { OriginatorHeaderComponent } from './originator-header/originator-header.component';
import { OriginatorLeftSideComponent } from './originator-left-side/originator-left-side.component';
import { OriginatorContentComponent } from './originator-content/originator-content.component';
import { OriginatorFooterComponent } from './originator-footer/originator-footer.component';
import { OriginatorControlSidebarComponent } from './originator-control-sidebar/originator-control-sidebar.component';

describe('originatorComponent', () => {
  let component: originatorComponent;
  let fixture: ComponentFixture<originatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        OriginatorComponent,
        OriginatorHeaderComponent,
        OriginatorLeftSideComponent,
        OriginatorContentComponent,
        OriginatorFooterComponent,
        OriginatorControlSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(OriginatorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Page Header');
  }));
});
