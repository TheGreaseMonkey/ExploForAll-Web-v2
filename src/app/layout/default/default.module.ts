import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DefaultComponent } from './default.component';
import { AdminDashboardComponent } from 'src/app/modules/admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    DefaultComponent,
    AdminDashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DefaultModule { }
