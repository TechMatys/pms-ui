import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/core/services/https/http.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';

interface EmployeePayment {
  employeeName: string,
  amount: string;
  month: string;
  paymentDate: string;
  
}
interface Employee {
employeeId: number;
firstName : string;
lastName : string;
}

@Component({
  selector: 'app-employee-payment',
  templateUrl: './employee-payment.component.html',
  styleUrls: ['./employee-payment.component.scss']
})
export class EmployeePaymentComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};

  faEdit = faEdit;
  faDelete = faTrash;
 
  isShown: boolean = true;
  isAddNew: boolean = true;
  controllerName = "Employee";
 

  employeePaymentList: EmployeePayment[] = [];
  employees: Employee[] = [];
  employeeForm: FormGroup;
  submitted = false;
  today: Date;


  constructor(private http: HttpService, private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,) { this.today = new Date();
  
    this.employeeForm = this.formBuilder.group({
      employeeId: [0],
      amount: [''],
      paymentMonth :[''],
      paymentYear : [''],
      PaymentDate :[''],
      notes :['']
    });
  }


  
  addEmployeePayment() {
    this.isShown = false;
    this.isAddNew = true;
  }
  
  getAllemployees() {
    this.http.getAll('employee').subscribe(res => {
      this.employees = res;
    });
  }

  deleteEmployee(employee: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this employee?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, employee.employeeId)
            .subscribe(res => {
              this.toastr.success("Employee deleted successfully", "Success");
              this.getAllemployees();
            });
        }
      });
  }

  editEmployee(employee: any) {
    this.http.get(this.controllerName, employee.employeeId)
      .subscribe(res => {
        this.isShown = false;
        this.employeeForm.setValue(res);
      });
  }
  saveEmployeePayment() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.employeeForm.invalid) {
      return;
    }

    const employeeData = this.employeeForm.value;
    const employeeId = employeeData.employeeId;
    if (employeeId < 1) {
      this.http.create(this.controllerName, this.employeeForm.value)
        .subscribe(res => {
          this.toastr.success("Employee created successfully", "Success");
          this.getAllemployeePayment();
        });
    }
    else {
      this.http.update(this.controllerName, employeeId, this.employeeForm.value)
        .subscribe(res => {
          this.toastr.success("Employee updated successfully", "Success");
          this.getAllemployeePayment();
        });
    }
  }

  getAllemployeePayment() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.employees = res;
    });

  }


  ngOnInit(): void {
    this.getAllemployees();
    this.getAllemployeePayment();
  }

}
