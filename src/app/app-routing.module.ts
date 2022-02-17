import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ProjectComponent } from './admin/pages/project/project.component';
import { EmployeeComponent } from './admin/pages/employee/employee.component';
import { EmployeeProjectComponent } from './admin/pages/employee-project/employee-project.component';
import { UserComponent } from './admin/pages/user/user.component';
import { EmployeePaymentComponent } from './admin/pages/employee-payment/employee-payment.component';
import { ProjectPaymentComponent } from './admin/pages/project-payment/project-payment.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'Project', component: ProjectComponent
  },
  {
    path: 'ProjectPayment', component: ProjectPaymentComponent
  },
  {
    path: 'Employee', component: EmployeeComponent
  },
  {
    path: 'EmployeeProject', component: EmployeeProjectComponent
  },
  {
    path: 'EmployeePayment', component: EmployeePaymentComponent
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
