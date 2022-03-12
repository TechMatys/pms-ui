import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { GlobalCodesService, GlobalCodes } from 'src/app/core/services/global-codes/global-codes.service';
import { HttpService } from 'src/app/core/services/https/http.service';

interface Employee {
  firstName: string,
  lastName: string,
  emailAddress: string;
  startDate: string;
  designation: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  employeeForm: FormGroup;
  submitted = false;
  today: Date;

  faEdit = faEdit;
  faDelete = faTrash;
  faCalendar = faCalendarAlt;
  isShown: boolean = true;
  isAddNew: boolean = true;
  controllerName = "Employee";

  employeeList: Employee[] = [];
  states: GlobalCodes[] = [];
  genders: GlobalCodes[] = [];
  designations: GlobalCodes[] = [];
  status: GlobalCodes[] = [];

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,
    private globalCodesService: GlobalCodesService, private http: HttpService) {

    this.genders = this.globalCodesService.genders;
    this.status = this.globalCodesService.status;
    this.designations = this.globalCodesService.designations;
    this.today = new Date();

    this.employeeForm = this.formBuilder.group({
      employeeId: [0],
      firstName: [null, Validators.required],
      middleName: [null],
      lastName: [null, Validators.required],
      gender: [0,[Validators.required, Validators.min(1)]],
      emailAddress: [null, Validators.required],
      mobile: [null],
      dateOfBirth: new FormControl(this.today),
      address: [null],
      city: [null],
      stateId: [0],
      statusId: [0,[Validators.required, Validators.min(1)]],
      designationId: [0,[Validators.required, Validators.min(1)]],
      postalCode: [null],
      startDate: new FormControl(this.today),
      endDate: [null],
      managedBy: [-1],
    });

  }

  getDesignation() {
    this.globalCodesService.getGlobalCodes("designations").subscribe(res => {
      // this.designations.spl({id: 0, name: '-- Select Desination --'})
      this.designations = res;
    });
  }

  getStatus() {
    this.globalCodesService.getGlobalCodes("employee-status").subscribe(res => {
      this.status = res;
    });
  }

  addEmployee() {
    this.resetForm();
    this.isShown = false;
    this.isAddNew = true;
  }

  resetForm() {
    this.submitted = false;
    this.employeeForm.reset();
    this.employeeForm.controls['dateOfBirth'].setValue(this.today);
    this.employeeForm.controls['startDate'].setValue(this.today);
    this.employeeForm.controls['gender'].setValue(0);
    this.employeeForm.controls['stateId'].setValue(0);
    this.employeeForm.controls['statusId'].setValue(0);
    this.employeeForm.controls['designationId'].setValue(0);
    this.employeeForm.controls['employeeId'].setValue(0);
    this.employeeForm.controls['managedBy'].setValue(-1);
  }

  deleteEmployee(employee: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this employee?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, employee.employeeId)
            .subscribe(res => {
              this.toastr.success("Employee deleted successfully", "Success");
              this.getAllEmployeeList();
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

  get f() { return this.employeeForm.controls; }

  saveEmployee() {
    this.submitted = true;

    //stop here if form is invalid
     if (this.employeeForm.invalid) {
      return;
    }

    const employeeData = this.employeeForm.value;
    const employeeId = employeeData.employeeId;
    if (employeeId < 1) {
      this.createEmployee();
    }
    else {
      this.updateEmployee(employeeId);
    }
  }

  createEmployee() {
    this.http.create(this.controllerName, this.employeeForm.value)
      .subscribe(res => {
        if (res > 0) {
          this.toastr.success("Employee created successfully.", "Success");
          this.getAllEmployeeList();
        }
        else if (res < 0) {
          this.toastr.warning("Employee email already in use.", "Warning");
        }
        else {
          this.toastr.error("Error in employee saving.", "Error");
        }
      });
  }

  updateEmployee(employeeId : number) {
    this.http.update(this.controllerName, employeeId, this.employeeForm.value)
      .subscribe(res => {
        if (res > 0) {
          this.toastr.success("Employee updated successfully.", "Success");
          this.getAllEmployeeList();
        }
        else if (res < 0) {
          this.toastr.warning("Employee email already in use.", "Warning");
        }
        else {
          this.toastr.error("Error in employee saving.", "Error");
        }
      });
  }

  getAllEmployeeList() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.employeeList = res;
    });

  }
  getStates() {
    this.globalCodesService.getGlobalCodes("states").subscribe(res => {
      this.states = res;
    });
  }
  getGenders() {
    this.globalCodesService.getGlobalCodes("genders").subscribe(res => {
      this.genders = res;
    });
  }

  ngOnInit(): void {
    this.getAllEmployeeList();
    this.getStates();
    this.getGenders();
    this.getDesignation();
    this.getStatus();
  }
}
