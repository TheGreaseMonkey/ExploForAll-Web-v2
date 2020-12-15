import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layout/default/default.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import { DefaultModule } from './layout/default/default.module';
import { AdminOverviewComponent } from './modules/admin-overview/admin-overview.component';
import { AdminUserComponent } from './modules/admin-user/admin-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminOverviewComponent,
    AdminUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
