import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  dateToday: number = Date.now();
  isSubmitted = false;

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
      name: [null, Validators.required],
      ownerName: [null],
      description: [null],
      startDate: new FormControl(this.today),
      durationId: [0, [Validators.required, Validators.min(1)]],
      statusId: [0, [Validators.required, Validators.min(1)]],
      technologies: [null],
      completionDate: [null],
      budgetAmount: [null],
      managedBy: [-1]

    });
  }

  get statusId() {
    return this.projectForm.get('statusId');
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

     if (this.projectForm.invalid) {
     return;
     }

    this.projectForm.controls['managedBy'].setValue(-1);

    const projectData = this.projectForm.value;
    const projectId = projectData.projectId;
    if (projectId < 1) {
      this.createProject();
    }
    else {
      this.updateProject(projectId);
    }
  }
  createProject() {
    this.http.create(this.controllerName, this.projectForm.value)
      .subscribe(res => {
        if (res > 0) {
          this.toastr.success("Employee created successfully", "Success");
          this.getAllProjectList();
        }
        else if (res < 0) {
          this.toastr.warning(" Project name already exist.", "Warning");
        }
        else {
          this.toastr.error("Error in project saving.", "Error");
        }
      });
  }

  updateProject(projectId: number) {
    this.http.update(this.controllerName, projectId, this.projectForm.value)
      .subscribe(res => {
        if (res > 0) {
          this.toastr.success("Project updated successfully", "Success");
          this.getAllProjectList();
        }
        else if (res < 0) {
          this.toastr.warning(" Project name already exist.", "Warning");
        }
        else {
          this.toastr.error("Error in project saving.", "Error");
        }
      });
  }

  getAllProjectList() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.projectlist = res;
    });

  }
 

  resetForm() { 
    this.submitted= false;
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
