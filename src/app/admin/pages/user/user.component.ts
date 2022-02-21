import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface User {
  userName: string,
  role: string,
  status: string,
  createDate : string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = false;
  isAddNew: boolean = true;
  userList: any;

  userlist: User[] = [
    {
      userName: 'Subhash Rawat',
      role: 'Admin',
      status: 'Active',
      createDate : '10/02/2022'
    },{
      userName: 'Tajwar Rawat',
      role: 'Staff',
      status: 'InActive',
      createDate : '10/02/2022'
    },{
      userName: 'Deppak Dhiman',
      role: 'Admin',
      status: 'Active',
      createDate : '10/02/2022'
    },{
      userName: 'Vikash Rawat',
      role: 'Staff',
      status: 'InActive',
      createDate : '10/02/2022'
    },{
      userName: 'Deppak Dhiman',
      role: 'Admin',
      status: 'Active',
      createDate : '10/02/2022'
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
    this.userList = [];
  }

  ngOnInit(): void {
  {
  this.isShown = !this.isShown;
    }
  }
    onRolesChange(item: any) {
  }

  onStatusChange(item: any) {

  }

}
