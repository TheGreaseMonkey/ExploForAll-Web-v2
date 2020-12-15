import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AdminBannerComponent } from './modules/admin-banner/admin-banner.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';
import { AdminLogComponent } from './modules/admin-log/admin-log.component';
import { AdminOverviewComponent } from './modules/admin-overview/admin-overview.component';
import { AdminQuestionsComponent } from './modules/admin-questions/admin-questions.component';
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
          },
          {
            path: 'questions',
            component: AdminQuestionsComponent
          },
          {
            path: 'banner',
            component: AdminBannerComponent
          },
          {
            path: 'log',
            component: AdminLogComponent
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
