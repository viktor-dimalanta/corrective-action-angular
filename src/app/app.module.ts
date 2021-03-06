import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { environment} from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { LoginComponent } from './login/login.component';
import { OriginatorComponent } from './originator/originator.component';
import { OriginatorContentComponent } from './originator/originator-content/originator-content.component';
import { OriginatorControlSidebarComponent } from './originator/originator-control-sidebar/originator-control-sidebar.component';
import { OriginatorFooterComponent } from './originator/originator-footer/originator-footer.component';
import { OriginatorHeaderComponent } from './originator/originator-header/originator-header.component';
import { OriginatorLeftSideComponent } from './originator/originator-left-side/originator-left-side.component';
import { UnitHeadComponent } from './unit-head/unit-head.component';
import { UnitHeadContentComponent } from './unit-head/unit-head-content/unit-head-content.component';
import { UnitHeadControlSidebarComponent } from './unit-head/unit-head-control-sidebar/unit-head-control-sidebar.component';
import { UnitHeadFooterComponent } from './unit-head/unit-head-footer/unit-head-footer.component';
import { UnitHeadHeaderComponent } from './unit-head/unit-head-header/unit-head-header.component';
import { UnitHeadLeftSideComponent } from './unit-head/unit-head-left-side/unit-head-left-side.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    LoginComponent,
    OriginatorComponent,
    OriginatorContentComponent,
    OriginatorControlSidebarComponent,
    OriginatorFooterComponent,
    OriginatorHeaderComponent,
    OriginatorLeftSideComponent,
    UnitHeadComponent,
    UnitHeadContentComponent,
    UnitHeadControlSidebarComponent,
    UnitHeadFooterComponent,
    UnitHeadHeaderComponent,
    UnitHeadLeftSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
