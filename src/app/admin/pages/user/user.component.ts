import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { GlobalCodes, GlobalCodesService } from 'src/app/core/services/global-codes/global-codes.service';

interface User {
  employeeName: string,
  role: string,
  status: string,
  createdDate: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
  isAddNew: boolean = true;

  userlist: User[] = [
    {
      employeeName: 'Subhash Rawat',
      role: 'Admin',
      status: 'Active',
      createdDate: '10/02/2022'
    }, {
      employeeName: 'Tajwar Rawat',
      role: 'Staff',
      status: 'InActive',
      createdDate: '10/02/2022'
    }, {
      employeeName: 'Deapak Dhiman',
      role: 'Admin',
      status: 'Active',
      createdDate: '10/02/2022'
    }, {
      employeeName: 'Vikash Rawat',
      role: 'Staff',
      status: 'InActive',
      createdDate: '10/02/2022'
    }, {
      employeeName: 'Prakash Rawat',
      role: 'Admin',
      status: 'Active',
      createdDate: '10/02/2022'
    }];

  employeesName = [
    {
      id: 0, name: '-- Select Employee Name--'
    }, {
      id: 1,
      name: 'Subhash Rawat'
    }, {
      id: 2,
      name: 'Tajwar Rawat'
    }, {
      id: 3,
      name: 'Deapak Dhiman'
    }, {
      id: 4,
      name: 'Vikash Rawat'
    }, {
      id: 5,
      name: 'Prakash Rawat'
    }];

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



    status: GlobalCodes[];
    roles: GlobalCodes[];
    

  constructor(private globalCodesService: GlobalCodesService) {

    this.status = this.globalCodesService.status;
    this.roles = this.globalCodesService.roles;
    
   }

  // Function to add new button
  addUser() {
    this.isShown = false;
    this.isAddNew = true;
  }

  onEmployeeChange(item: any) {
  }
  onRolesChange(item: any) {
  }

  onStatusChange(item: any) {

  }


  ngOnInit(): void { }



}
