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

  dtOptions: DataTables.Settings = {};

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
    this.globalCodesService.getGlobalCodes("project-status").subscribe(_res => {
      if(_res.statusCode === 200){
        this.status = _res.response;
      }
      else{
        this.toastr.error("Error in getting status.", "Error");
      }
      });
  }

  getDurations() {
    this.globalCodesService.getGlobalCodes("project-durations").subscribe(_res => {
      if(_res.statusCode === 200){
        this.durations = _res.response;
      }
      else{
        this.toastr.error("Error in getting durations.", "Error");
      }
    });
  }

  getTechnologies() {
    this.globalCodesService.getGlobalCodes("technologies").subscribe(_res => {
      if(_res.statusCode === 200){
        this.technologies = _res.response;
      }
      else{
        this.toastr.error("Error in getting technologies.", "Error");
      }
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
            .subscribe(_res => {
              if (_res.statusCode === 200) {
                this.toastr.success("Project deleted successfully.", "Success");
                this.getAllProjectList();
              }
              else {
                this.toastr.error("Project doesn't exists.", "Warning");
              }
            });
        }
      });
  }

  editProject(project: any) {
    this.http.get(this.controllerName, project.projectId)
      .subscribe(_res => {
        if (_res.statusCode === 200) {
          this.isShown = false;
          this.projectForm.setValue(_res.data);
        }
        else {
          this.toastr.error("Error in getting project data.", "Warning");
        }
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
      .subscribe(_res => {
        if (_res.statusCode === 200) {
          this.toastr.success("Project created successfully.", "Success");
          this.getAllProjectList();
        }
        else if (_res.statusCode===409) {
          this.toastr.warning("Project name already in use.", "Warning");
        }
        else if(_res.statusCode===500){
          this.toastr.error("Error in employee saving.", "Error");
        }
      });
  }

  updateProject(projectId: number) {
    this.http.update(this.controllerName, projectId, this.projectForm.value)
      .subscribe(_res => {
        if (_res.statusCode === 200) {
          this.toastr.success("Project updated successfully", "Success");
          this.getAllProjectList();
        }
        else if (_res.statusCode === 200) {
          this.toastr.warning(" Project name already exist.", "Warning");
        }
        else if(_res.statusCode===500){
          this.toastr.error("Error in project updating.", "Error");
        }
      });
  }

  getAllProjectList() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(_res => {
      if(_res.statusCode === 200){
        this.projectlist= _res.response;
      }
      else{
        this.toastr.error("Error in get employee list.", "Error");
      }
      
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
