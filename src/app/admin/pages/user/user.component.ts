import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { GlobalCodes, GlobalCodesService } from 'src/app/core/services/global-codes/global-codes.service';
import { HttpService } from 'src/app/core/services/https/http.service';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface User {
  employeeName: string,
  role: string,
  status: string,
  createdDate: string
}
interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string; 
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  //dtOptions: DataTables.Settings = {};
  usersForm: FormGroup;
  submitted = false;

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
  isAddNew: boolean = true;
  controllerName = "Users";

  userlist: User[] = [];

  employeesList : Employee[]  = [];

    employeeScreens = [{
      id: 0, name: 'Employee Detail'
    }, {
      id: 1, name: '.Employee Project'
    }, {
      id: 2, name: 'Employee Payment' 
    }];

    projectScreens = [{
      id: 0, name: 'Project Detail'
    }, {      
      id: 1, name: 'Project Payment' 
    }];

    companyScreens = [{
      id: 0, name: 'Company Expenses'
    }, {
      id: 1, name: 'Users'
    }, {
      id: 2, name: 'Generate Invoice' 
    }, {
      id: 2, name: 'Report' 
    }];



    status: GlobalCodes[] = [];
    rolesList: GlobalCodes[];
    today: Date;
    

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,
    private globalCodesService: GlobalCodesService, private http: HttpService) {
      this.today = new Date();
    this.status = this.globalCodesService.status;
    this.rolesList = this.globalCodesService.roleslist;


    this.usersForm = this.formBuilder.group({
      userId: [0],
      employeeId: [0,[Validators.required, Validators.min(1)]],
      roleId: [0,[Validators.required, Validators.min(1)]],
      screenPermissionId:[0],
      statusId: [0,[Validators.required, Validators.min(1)]],
      managedBy: [-1]
    });
  
    
   }
   getAllUserList() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.userlist = res;
    });

  }
   

  // Function to add new button
  addUser() {
    this.resetForm();
    this.isShown = false;
    this.isAddNew = true;
  }

  deleteUser(user: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this user?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, user.userId)
            .subscribe(res => {
              this.toastr.success("User deleted successfully", "Success");
              this.getAllUserList();
            });
        }
      });
  }

  editUser(user: any) {
    this.http.get(this.controllerName, user.userId)
      .subscribe(res => {
        this.isShown = false;
        this.usersForm.setValue(res);
      });
  }
  get f() { return this.usersForm.controls; }

  saveUser() {
    this.submitted = true;
  // stop here if form is invalid
     if (this.usersForm.invalid) {
     return;
    }
    this.usersForm.controls['managedBy'].setValue(-1); 

    const usersData = this.usersForm.value;
    const userId = usersData.userId;
    if (userId < 1) {
      this.http.create(this.controllerName, usersData)
        .subscribe(res => {
          this.toastr.success("User created successfully", "Success");
          this.getAllUserList();
        });
    }
    else {
      this.http.update(this.controllerName, userId, usersData)
        .subscribe(res => {
          this.toastr.success("Users updated successfully", "Success");
          this.getAllUserList();
        });
    }
  }

  getAllEmployees() {
    this.http.getAll('Employee').subscribe(res => {
      this.employeesList = res;
    });
  }

  getStatus() {
    this.globalCodesService.getGlobalCodes("user-status").subscribe(res => {
      this.status = res;
    });
  }

  getRole() {
    this.globalCodesService.getGlobalCodes("user-role").subscribe(res => {
      this.rolesList = res;
    });
  }
  resetForm(){
    this.submitted = false;
    this.usersForm.reset();
    this.usersForm.controls['statusId'].setValue(0); 
    this.usersForm.controls['roleId'].setValue(0); 
    this.usersForm.controls['employeeId'].setValue(0); 
    this.usersForm.controls['managedBy'].setValue(-1); 
  }

  ngOnInit(): void { 
    this.getAllEmployees();
    this.getAllUserList();
    this.getStatus();
    this.getRole();
  }



}
