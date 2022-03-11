import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { faCalendarAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/core/services/https/http.service';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';

interface ProjectPayment {
  projectName: string;
  receivedAmount: string;
  paymentMonthYear: string;
  paymentDate: string;
}

interface Project {
  projectId: number;
  name: string;
}

@Component({
  selector: 'app-project-payment',
  templateUrl: './project-payment.component.html',
  styleUrls: ['./project-payment.component.scss']
})


export class ProjectPaymentComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};

  faEdit = faEdit;
  faDelete = faTrash;

  isShown: boolean = true;
  isAddNew: boolean = true;

  controllerName = "Project-Payment";
  
  projectPaymentList: ProjectPayment[] = [];  
  projectsList: Project[] = [];
  projectPaymentForm: FormGroup;
  submitted = false;
  faCalendar = faCalendarAlt;
  today: Date;

  constructor(private http: HttpService, private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,) {
     this.today = new Date();

     this.projectPaymentForm = this.formBuilder.group({
      projectPaymentId: [0],
      projectId: [0, [Validators.required, Validators.min(1)]],
      receivedAmount:[null,Validators.required],
      balancedAmount: [null],
      paymentMonthYear: [null,Validators.required],
      paymentDate: new FormControl(this.today),
      notes: [null],
      managedBy: [-1]
    });

    }

  // Function to add new button
  addProjectPayment() {
    this.resetForm();
    this.isShown = false;
    this.isAddNew = true;
  }


  resetForm(){ 
    this.submitted = false; 
    this.projectPaymentForm.reset();
    this.projectPaymentForm.controls['paymentDate'].setValue(this.today); 
    this.projectPaymentForm.controls['projectPaymentId'].setValue(0); 
    this.projectPaymentForm.controls['projectId'].setValue(0);  
    this.projectPaymentForm.controls['managedBy'].setValue(-1); 
  }


  getAllProjects() {
    this.http.getAll('Project').subscribe(res => {
      this.projectsList = res;
    });
  }

  deleteProject(projectPayment: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this project payment?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, projectPayment.projectPaymentId)
            .subscribe(res => {
              this.toastr.success("Project payment deleted successfully", "Success");
              this.getAllProjectPayment();
            });
        }
      });
  }

  editProject(projectPayment: any) {
    this.http.get(this.controllerName, projectPayment.projectPaymentId)
      .subscribe(res => {
        this.isShown = false;
        this.projectPaymentForm.setValue(res);
      });
  }
  
  get f() { return this.projectPaymentForm.controls; }

  saveProjectPayment() {
    this.submitted = true;

    // stop here if form is invalid
     if (this.projectPaymentForm.invalid) {
       return;
    }
    this.projectPaymentForm.controls['managedBy'].setValue(-1);

    const projectPaymentData = this.projectPaymentForm.value;
    const projectPaymentId = projectPaymentData.projectPaymentId;

    if (projectPaymentId < 1) {
      this.http.create(this.controllerName, projectPaymentData)
        .subscribe(res => {
          this.toastr.success("Project payment added successfully", "Success");
          this.getAllProjectPayment();
        });
    }
    else {
      this.http.update(this.controllerName, projectPaymentId, projectPaymentData)
        .subscribe(res => {
          this.toastr.success("Project payment updated successfully", "Success");
          this.getAllProjectPayment();
        });
    }
  }

  getAllProjectPayment() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.projectPaymentList = res;
    });
  }

  ngOnInit(): void {
    this.getAllProjects();
    this.getAllProjectPayment();
  }

}
