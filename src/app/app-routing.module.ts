import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ProjectComponent } from './admin/pages/project/project.component';
import { EmployeeComponent } from './admin/pages/employee/employee.component';
import { EmployeeProjectComponent } from './admin/pages/employee-project/employee-project.component';
import { UserComponent } from './admin/pages/user/user.component';

const routes: Routes = [
  {
    path:'', component: DashboardComponent
  },
  {
    path:'Project', component: ProjectComponent
  },
  {
    path:'Employee', component: EmployeeComponent
  },
  {
    path: 'EmployeeProject', component: EmployeeProjectComponent
  },
  {
    path: 'User', component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
