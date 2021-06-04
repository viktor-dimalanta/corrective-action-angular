import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { LoginComponent } from './../login/login.component';
import { AdminComponent } from './../admin/admin.component';
import { OriginatorComponent } from './../originator/originator.component';
import { UnitHeadComponent } from './../unit-head/unit-head.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'starter', component: StarterComponent },
      { path: 'originator', component: OriginatorComponent },
      { path: 'unit_head', component: UnitHeadComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
