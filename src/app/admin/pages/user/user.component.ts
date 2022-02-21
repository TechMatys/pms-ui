import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

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

  roles = [{
    id: 0, name: '-- Select Roles --'
  }, {
    id: 1, name: 'Admin'
  }, {
    id: 2, name: 'Staff'
  }];

  status = [{
    id: 0, name: '-- Select Status --'
  }, {
    id: 1, name: 'Active'
  }, {
    id: 2, name: 'InActive'
  }];

  constructor() { }

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
