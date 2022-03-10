import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/core/services/https/http.service';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
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
  firstName: string;
  lastName: string;
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
  controllerName = "Employee-Payment";

  employeePaymentList: EmployeePayment[] = [];
  employeesList: Employee[] = [];
  employeePaymentForm: FormGroup;
  submitted = false;
  today: Date;
  faCalendar = faCalendarAlt;

  constructor(private http: HttpService, private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,) {
    this.today = new Date();

    this.employeePaymentForm = this.formBuilder.group({
      employeePaymentId: [0],
      employeeId: [0,[Validators.required, Validators.min(1)]],
      amount: [null,Validators.required],
      paymentMonthYear: [null,Validators.required],
      paymentDate: new FormControl(this.today),
      notes: [null],
      managedBy: [-1]
    });
  }

  addEmployeePayment() {
    this.resetForm();
    this.isShown = false;
    this.isAddNew = true;
  }

  resetForm(){
    this.submitted = false;
    this.employeePaymentForm.reset();
    this.employeePaymentForm.controls['paymentDate'].setValue(this.today); 
    this.employeePaymentForm.controls['employeePaymentId'].setValue(0); 
    this.employeePaymentForm.controls['employeeId'].setValue(0);  
    this.employeePaymentForm.controls['managedBy'].setValue(-1); 
  }


  getAllEmployees() {
    this.http.getAll('Employee').subscribe(res => {
      this.employeesList = res;
    });
  }

  deleteEmployee(employeePayment: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this employee payment?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, employeePayment.employeePaymentId)
            .subscribe(res => {
              this.toastr.success("Employee payment deleted successfully", "Success");
              this.getAllEmployeePayment();
            });
        }
      });
  }

  editEmployee(employePayment: any) {
    this.http.get(this.controllerName, employePayment.employeePaymentId)
      .subscribe(res => {
        this.isShown = false;
        this.employeePaymentForm.setValue(res);
      });
  }
  get f() { return this.employeePaymentForm.controls; }
  
  saveEmployeePayment() {
    this.submitted = true;

    // stop here if form is invalid
     if (this.employeePaymentForm.invalid) {
      return;
     }
    this.employeePaymentForm.controls['managedBy'].setValue(-1);

    const employeePaymentData = this.employeePaymentForm.value;
    const employeePaymentId = employeePaymentData.employeePaymentId;

    if (employeePaymentId < 1) {
      this.http.create(this.controllerName, employeePaymentData)
        .subscribe(res => {
          this.toastr.success("Employee payment added successfully", "Success");
          this.getAllEmployeePayment();
        });
    }
    else {
      this.http.update(this.controllerName, employeePaymentId, employeePaymentData)
        .subscribe(res => {
          this.toastr.success("Employee payment updated successfully", "Success");
          this.getAllEmployeePayment();
        });
    }
  }

  getAllEmployeePayment() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.employeePaymentList = res;
    });
  }

  ngOnInit(): void {
    this.getAllEmployees();
    this.getAllEmployeePayment();
  }

}
