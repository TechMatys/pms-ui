import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { EmployeeComponent } from './admin/pages/employee/employee.component';
import { ProjectComponent } from './admin/pages/project/project.component';
import { EmployeeProjectComponent } from './admin/pages/employee-project/employee-project.component';
import { ProjectPaymentComponent } from './admin/pages/project-payment/project-payment.component';
import { EmployeePaymentComponent } from './admin/pages/employee-payment/employee-payment.component';
import { CompanyExpensesComponent } from './admin/pages/company-expenses/company-expenses.component';
import { ReportComponent } from './admin/pages/report/report.component';
import { ProfileComponent } from './admin/pages/profile/profile.component';
import { CompanyInvoiceComponent } from './admin/pages/company-invoice/company-invoice.component';
import { UserComponent } from './admin/pages/user/user.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { PopUpComponent } from './core/pop-up/pop-up.component';
import { AdminComponent } from './admin/admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { NgChartsModule } from 'ng2-charts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoginComponent } from './home/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    ProjectComponent,
    EmployeeProjectComponent,
    UserComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    LoginComponent,
    AdminComponent,
    ProjectPaymentComponent,
    EmployeePaymentComponent,
    CompanyExpensesComponent,
    PopUpComponent,
    ReportComponent,
    ProfileComponent,
    CompanyInvoiceComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    DataTablesModule,
    NgChartsModule,
    HttpClientModule,
    CollapseModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
