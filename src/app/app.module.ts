import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { EmployeeComponent } from './admin/pages/employee/employee.component';
import { ProjectComponent } from './admin/pages/project/project.component';
import { EmployeeProjectComponent } from './admin/pages/employee-project/employee-project.component';
import { UserComponent } from './admin/pages/user/user.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { LoginComponent } from './home/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectPaymentComponent } from './admin/pages/project-payment/project-payment.component';
import { EmployeePaymentComponent } from './admin/pages/employee-payment/employee-payment.component';
import { CompanyExpensesComponent } from './admin/pages/company-expenses/company-expenses.component';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
