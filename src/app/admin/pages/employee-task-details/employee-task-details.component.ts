import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/core/services/https/http.service';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';

interface EmployeeTaskDetail {
  employeeName: string;
  taskDate: string;
  status: string;
  createdDate: string;
}

interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
}


interface TaskStatus {
  id: number;
  title: string;
}


@Component({
  selector: 'app-employee-task-details',
  templateUrl: './employee-task-details.component.html'
})

export class EmployeeTaskDetailsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  faEdit = faEdit;
  faDelete = faTrash;
  faCalendar = faCalendarAlt;
  isShown: boolean = true;
  isAddNew: boolean = true;
  
  controllerName = "Employee-Task-Detail";

  employeeTaskDetailList: EmployeeTaskDetail[] = [];
  employeesList: Employee[] = [];
  taskStatusList: TaskStatus[] = [];
  taskDetailForm: FormGroup;
  submitted = false;
  today: Date;

  constructor(private http: HttpService, private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,) { 
    
    this.today = new Date();
   
    this.taskDetailForm = this.formBuilder.group({
      employeeTaskDetailId: [0],
      employeeId: [0,[Validators.required, Validators.min(1)]],
      statusId: [0,[Validators.required, Validators.min(1)]],
      taskDate: new FormControl(this.today),
      notes: [null],
      managedBy: [-1]
    });}

  // Function to add new button
  addTaskDetail() {
    this.resetForm();
    this.isShown = false;
    this.isAddNew = true;
  }

  resetForm(){
    this.submitted = false;
    this.taskDetailForm.reset();
    this.taskDetailForm.controls['taskDate'].setValue(this.today); 
    this.taskDetailForm.controls['employeeTaskDetailId'].setValue(0); 
    this.taskDetailForm.controls['employeeId'].setValue(0); 
    this.taskDetailForm.controls['statusId'].setValue(0); 
    this.taskDetailForm.controls['managedBy'].setValue(-1); 
  }


  getAllEmployees() {
    this.http.getAll('Employee').subscribe(res => {
      this.employeesList = res;
    });
  }

  deleteTask(employeeProject: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this employee project?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, employeeProject.employeeProjectId)
            .subscribe(res => {
              this.toastr.success("Employee project deleted successfully", "Success");
              this.getAllEmployeeTaskDetails();
            });
        }
      });
  }

  viewTask(employeProject: any) {
    this.http.get(this.controllerName, employeProject.employeeProjectId)
      .subscribe(res => {
        this.isShown = false;
        this.taskDetailForm.setValue(res);
      });
  }

  get f() { return this.taskDetailForm.controls; }

  saveTaskDetail() {
    this.submitted = true;
     // stop here if form is invalid
     if (this.taskDetailForm.invalid) {
      return;
    }
    this.taskDetailForm.controls['managedBy'].setValue(-1);

    const employeeProjectData = this.taskDetailForm.value;
    const employeeProjectId = employeeProjectData.employeeProjectId;

    if (employeeProjectId < 1) {
      this.createEmployeeTaskDetail();      
    }
    else {
      this.updateEmployeeTaskDetail(employeeProjectId);
    }
  }

  createEmployeeTaskDetail() {
    this.http.create(this.controllerName, this.taskDetailForm.value)
      .subscribe(res => {
        if (res > 0) {
          this.toastr.success("Project assigned to employee successfully.", "Success");
          this.getAllEmployeeTaskDetails();
        }
        else if (res < 0) {
          this.toastr.warning("Project already assigned to other employee.", "Warning");
        }
        else {
          this.toastr.error("Error in assign project.", "Error");
        }
      });
  }

  updateEmployeeTaskDetail(employeeProjectId: number) {
    this.http.update(this.controllerName, employeeProjectId, this.taskDetailForm.value)
      .subscribe(res => {
        if (res > 0) {
          this.toastr.success("Employee project updated successfully.", "Success");
          this.getAllEmployeeTaskDetails();
        }
        else if (res < 0) {
          this.toastr.warning("Project already assigned to other employee.", "Warning");
        }
        else {
          this.toastr.error("Error in assign project.", "Error");
        }
      });
  }

  getAllEmployeeTaskDetails() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.employeeTaskDetailList = res;
    });
  }

  ngOnInit(): void {
    this.getAllEmployees();
    this.getAllEmployeeTaskDetails();
  }

}
