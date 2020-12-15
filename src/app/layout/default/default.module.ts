import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DefaultComponent } from './default.component';
import { AdminDashboardComponent } from 'src/app/modules/admin-dashboard/admin-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DefaultComponent,
    AdminDashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    RouterModule
  ]
})
export class DefaultModule { }
