import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCalendarAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { GlobalCodes, GlobalCodesService } from 'src/app/core/services/global-codes/global-codes.service';
import { HttpService } from 'src/app/core/services/https/http.service';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';

interface Project {
  name: string,
  startDate: string,
  status: string,
  technology: string
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};

  projectForm: FormGroup;
  submitted = false;

  faEdit = faEdit;
  faDelete = faTrash;
  faCalendar = faCalendarAlt;
  isShown: boolean = true;
  isAddNew: boolean = true;
  controllerName = "Project";

  projectlist: Project[] = [];

  status: GlobalCodes[] = [];
  durations: GlobalCodes[] = [];
  technologies: GlobalCodes[] = [];
  today: Date;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,
    private globalCodesService: GlobalCodesService, private http: HttpService) {
    this.today = new Date();

    this.projectForm = this.formBuilder.group({
      projectId: [0],
      name: [null],
      ownerName: [null],
      description: [null],

      startDate: new FormControl(this.today),
      durationId: [0],
      statusId: [0],
      technologies: [null],
      completionDate: [null],
      budgetAmount: [null],
      managedBy: [-1]

    });
  }

  getStatus() {
    this.globalCodesService.getGlobalCodes("project-status").subscribe(res => {
      this.status = res;
    });
  }

  getDurations() {
    this.globalCodesService.getGlobalCodes("project-durations").subscribe(res => {
      this.durations = res;
    });
  }

  getTechnologies() {
    this.globalCodesService.getGlobalCodes("technologies").subscribe(res => {
      this.technologies = res;
    });
  }
  // Function to add new button
  addProject() {
    this.resetForm();
    this.isShown = false;
    this.isAddNew = true;
  }
  
  deleteProject(project: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this project?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, project.projectId)
            .subscribe(res => {
              this.toastr.success("Project deleted successfully", "Success");
              this.getAllProjectList();
            });
        }
      });
  }

  editProject(project: any) {
    this.http.get(this.controllerName, project.projectId)
      .subscribe(res => {
        this.isShown = false;
        this.projectForm.setValue(res);
      });
  }

  get f() { return this.projectForm.controls; }

  saveProject() {
    this.submitted = true;

    // stop here if form is invalid

    // if (this.projectForm.invalid) {
    //   return;
    // }
    
    this.projectForm.controls['managedBy'].setValue(-1); 

    const projectData = this.projectForm.value;
    const projectId = projectData.projectId;
    if (projectId < 1) {
      this.http.create(this.controllerName, projectData)
        .subscribe(res => {
          this.toastr.success("Project created successfully", "Success");
          this.getAllProjectList();
        });
    }
    else {
      this.http.update(this.controllerName, projectId, projectData)
        .subscribe(res => {
          this.toastr.success("Project updated successfully", "Success");
          this.getAllProjectList();
        });
    }
  }

  getAllProjectList() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.projectlist = res;
    });

  }
  
  resetForm(){
    this.projectForm.reset();
    this.projectForm.controls['startDate'].setValue(this.today); 
    this.projectForm.controls['statusId'].setValue(0); 
    this.projectForm.controls['durationId'].setValue(0); 
    this.projectForm.controls['projectId'].setValue(0); 
    this.projectForm.controls['managedBy'].setValue(-1); 
  }

  ngOnInit(): void {

    this.getAllProjectList();
    this.getStatus();
    this.getDurations();
    this.getTechnologies();
    
  }



}
