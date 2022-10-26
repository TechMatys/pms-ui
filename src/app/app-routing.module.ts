import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ProjectComponent } from './admin/pages/project/project.component';
import { EmployeeComponent } from './admin/pages/employee/employee.component';
import { EmployeeProjectComponent } from './admin/pages/employee-project/employee-project.component';
import { UserComponent } from './admin/pages/user/user.component';
import { EmployeePaymentComponent } from './admin/pages/employee-payment/employee-payment.component';
import { ProjectPaymentComponent } from './admin/pages/project-payment/project-payment.component';
import { CompanyExpensesComponent } from './admin/pages/company-expenses/company-expenses.component';
import { ReportComponent } from './admin/pages/report/report.component';
import { ProfileComponent } from './admin/pages/profile/profile.component';
import { CompanyInvoiceComponent } from './admin/pages/company-invoice/company-invoice.component';
import { CompanyDocumentsComponent } from './admin/pages/company-documents/company-documents.component';
import { EmployeeTaskDetailsComponent } from './admin/pages/employee-task-details/employee-task-details.component';
import { AddTaskComponent } from './employee-board/add-task/add-task.component';

let role = '1';

localStorage.setItem('roleId', role);

const routes: Routes = [
  {
    path: '', component: role == '1' ? DashboardComponent : AddTaskComponent
  },
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Dashboard', component: DashboardComponent
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
    path: 'CompanyExpenses', component: CompanyExpensesComponent
  },
  {
    path: 'CompanyInvoice', component: CompanyInvoiceComponent
  },
  {
    path: 'CompanyDocuments', component: CompanyDocumentsComponent
  },
  {
    path: 'User', component: UserComponent
  },
  {
    path: 'Report', component: ReportComponent
  },
  {
    path: 'Profile', component: ProfileComponent
  },
  {
    path: 'EmployeeTaskDetails', component: EmployeeTaskDetailsComponent
  },
  {
    path: 'AddEmployeeTask', component: AddTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
