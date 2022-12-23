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
  maxDate: Date;

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
    this.maxDate = new Date();

    this.employeeForm = this.formBuilder.group({
      employeeId: [0],
      firstName: [null, Validators.required],
      middleName: [null],
      lastName: [null, Validators.required],
      gender: [0, [Validators.required, Validators.min(1)]],
      emailAddress: [null, Validators.required],
      mobile: [null],
      dateOfBirth: new FormControl(this.today),
      address: [null],
      city: [null],
      stateId: [0],
      statusId: [0, [Validators.required, Validators.min(1)]],
      designationId: [0, [Validators.required, Validators.min(1)]],
      postalCode: [null],
      startDate: new FormControl(this.today),
      endDate: [null],
      managedBy: [-1],
    });

  }

  getDesignation() {
    this.globalCodesService.getGlobalCodes("designations").subscribe(_res => {
      if(_res.statusCode === 200){
        this.designations = _res.response;
      }
      else{
        this.toastr.error("Error in getting designation.", "Error");
      }
    });
  }

  getStatus() {
    this.globalCodesService.getGlobalCodes("employee-status").subscribe(_res => {
      if(_res.statusCode === 200){
        this.status = _res.response;
      }
      else{
        this.toastr.error("Error in getting employee status.", "Error");
      }
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
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.employeeForm.controls['dateOfBirth'].setValue(this.maxDate);
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
            .subscribe(_res => {
              if (_res.statusCode === 200) {
                this.toastr.success("Employee deleted successfully.", "Success");
                this.getAllEmployeeList();
              }
              else {
                this.toastr.error("Employee doesn't exists.", "Warning");
              }
            });
        }
      });
  }

  editEmployee(employee: any) {
    this.http.get(this.controllerName, employee.employeeId)
      .subscribe(_res => {
        if (_res.statusCode === 200) {
          this.isShown = false;
          this.employeeForm.setValue(_res.data);
        }
        else {
          this.toastr.error("Error in getting employee data.", "Warning");
        }
      });
  }

  get f() { return this.employeeForm.controls; }

  saveEmployee() {
    this.submitted = true;

    //stop here if form is invalid
    if (this.employeeForm.invalid) {
      return;
    }

    if (this.validateForm()) {
      const employeeData = this.employeeForm.value;
      const employeeId = employeeData.employeeId;
      if (employeeId < 1) {
        this.createEmployee();
      }
      else {
        this.updateEmployee(employeeId);
      }
    }
  }

  createEmployee() {
    this.http.create(this.controllerName, this.employeeForm.value)
      .subscribe(_res => {
        if (_res.statusCode === 200) {
          this.toastr.success("Employee created successfully.", "Success");
          this.getAllEmployeeList();
        }
        else if (_res.statusCode===409) {
          this.toastr.warning("Employee email already in use.", "Warning");
        }
        else if(_res.statusCode===500){
          this.toastr.error("Error in employee saving.", "Error");
        }
      });
  }

  updateEmployee(employeeId: number) {
    this.http.update(this.controllerName, employeeId, this.employeeForm.value)
      .subscribe(_res => {
        if (_res.statusCode === 200) {
          this.toastr.success("Employee updated successfully.", "Success");
          this.getAllEmployeeList();
        }
        else if (_res.statusCode===409) {
          this.toastr.warning("Employee email already in use.", "Warning");
        }
        else if(_res.statusCode===500){
          this.toastr.error("Error in employee saving.", "Error");
        }
      });
  }

  getAllEmployeeList() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(_res => {
      if(_res.statusCode === 200){
        this.employeeList= _res.response;
      }
      else{
        this.toastr.error("Error in get employee list.", "Error");
      }
    });
  }

  getStates() {
    this.globalCodesService.getGlobalCodes("states").subscribe(_res => {
      if(_res.statusCode === 200){
        this.states = _res.response;
      }
      else{
        this.toastr.error("Error in getting states.", "Error");
      }
    });
  }

  getGenders() {
    this.globalCodesService.getGlobalCodes("genders").subscribe(_res => {
      if(_res.statusCode === 200){
        this.genders = _res.response;
      }
      else{
        this.toastr.error("Error in getting gender.", "Error");
      }
    });
  }

  validateForm() {
    //If Start Date less than End Date 
    // if()
    // {
       return true;
    // }
    // else
    // {
    //   this.toastr.warning("Start date should be greater then end date.", "Warning");
    //   return false;
    // }
  }

  ngOnInit(): void {
    this.getAllEmployeeList();
    this.getStates();
    this.getGenders();
    this.getDesignation();
    this.getStatus();
  }
}
