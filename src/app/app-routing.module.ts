import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import { AdminOverviewComponent } from './modules/admin-overview/admin-overview.component';
import { AdminUserComponent } from './modules/admin-user/admin-user.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        children: [
          {
            path: '',
            component: AdminOverviewComponent
          },
          {
            path: 'users',
            component: AdminUserComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
