import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/core/services/https/http.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';


interface EmployeeProject {
  employeeName: string;
  projectName: string;
  assignedDate: string;
  createdDate: string;
  
}

interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
}

interface Project {
 projectId:number;
 name: string;
}

@Component({
  selector: 'app-employee-project',
  templateUrl: './employee-project.component.html',
  styleUrls: ['./employee-project.component.scss']
})
export class EmployeeProjectComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};

  faEdit = faEdit;
  faDelete = faTrash;
  faCalendar = faCalendarAlt;
  isShown: boolean = true;
  isAddNew: boolean = true;
  
  controllerName = "Employee-Project";

  employeeProjectList: EmployeeProject[] = [];
  employeesList: Employee[] = [];
  projectsList: Project[] = [];
  employeeProjectForm: FormGroup;
  submitted = false;
  today: Date;

  constructor(private http: HttpService, private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,) { this.today = new Date();
   
    this.employeeProjectForm = this.formBuilder.group({
      employeeProjectId: [0],
      employeeId: [0],
      projectId: [0],
      assignedDate: new FormControl(this.today),
      notes: [null],
      managedBy: [-1]
    });}

  // Function to add new button
  addEmployeeProject() {
    this.resetForm();
    this.isShown = false;
    this.isAddNew = true;
  }

  resetForm(){
    this.employeeProjectForm.reset();
    this.employeeProjectForm.controls['assignedDate'].setValue(this.today); 
    this.employeeProjectForm.controls['employeeProjectId'].setValue(0); 
    this.employeeProjectForm.controls['employeeId'].setValue(0); 
    this.employeeProjectForm.controls['projectId'].setValue(0);  
    this.employeeProjectForm.controls['managedBy'].setValue(-1); 
  }


  getAllEmployees() {
    this.http.getAll('Employee').subscribe(res => {
      this.employeesList = res;
    });
  }

  getAllProjects() {
    this.http.getAll('Project').subscribe(res => {
      this.projectsList = res;
    });
  }

  deleteEmployeeProject(employeeProject: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this employee project?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, employeeProject.employeeProjectId)
            .subscribe(res => {
              this.toastr.success("Employee project deleted successfully", "Success");
              this.getAllEmployeeProject();
            });
        }
      });
  }

  editEmployeeProject(employeProject: any) {
    this.http.get(this.controllerName, employeProject.employeeProjectId)
      .subscribe(res => {
        this.isShown = false;
        this.employeeProjectForm.setValue(res);
      });
  }
  saveEmployeeProject() {
    this.submitted = true;

    
    this.employeeProjectForm.controls['managedBy'].setValue(-1);

    const employeeProjectData = this.employeeProjectForm.value;
    const employeeProjectId = employeeProjectData.employeeProjectId;

    if (employeeProjectId < 1) {
      this.http.create(this.controllerName, employeeProjectData)
        .subscribe(res => {
          this.toastr.success("Employee project added successfully", "Success");
          this.getAllEmployeeProject();
        });
    }
    else {
      this.http.update(this.controllerName, employeeProjectId, employeeProjectData)
        .subscribe(res => {
          this.toastr.success("Employee project updated successfully", "Success");
          this.getAllEmployeeProject();
        });
    }
  }
  getAllEmployeeProject() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.employeeProjectList = res;
    });
  }

  ngOnInit(): void {
    this.getAllEmployees();
    this.getAllProjects();
    this.getAllEmployeeProject();
  }
 
}
