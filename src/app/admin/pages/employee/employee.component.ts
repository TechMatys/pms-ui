import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalCodesService, GlobalCodes } from 'src/app/core/services/global-codes/global-codes.service';
import { HttpService } from 'src/app/core/services/https/http.service';
import { Observable } from 'rxjs';


interface Employee {
  firstName: string,
  lastName: string,
  emailAddress: string;
  startDate: string;
  designation: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  dtOptions: DataTables.Settings = {};

  employeeForm: FormGroup;
  submitted = false;
  today: Date;

  faEdit = faEdit;
  faDelete = faTrash;
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
      firstName: ['', Validators.required],
    });

  }


  addEmployee() {
    this.isShown = false;
    this.isAddNew = true;
  }

  onDesignationChange(item: any) {
  }

  onGenderChange(item: any) {
  }

  onStatusChange(item: any) {

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
          this.getAllEmployeeList();
        });
    }
    else {
      this.http.update(this.controllerName, employeeId, this.employeeForm.value)
        .subscribe(res => {
          this.toastr.success("Employee updated successfully", "Success");
          this.getAllEmployeeList();
        });
    }
  }

  getAllEmployeeList() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.employeeList = res;
    });

  }
  getstates(){
    this.globalCodesService.getGlobalCodes("states").subscribe(res => {
      this.states = res;
    });
  }
  getgenders(){
    this.globalCodesService.getGlobalCodes("genders").subscribe(res => {
      this.genders = res;
    });
  }

  ngOnInit(): void {
    this.getAllEmployeeList();
    this.getstates();
    this.getgenders();
  }
}
