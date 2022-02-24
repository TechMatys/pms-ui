import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface EmployeeProject {
  name: string;
  project: any;
  assignedDate: any;
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
  isShown: boolean = true;
  isAddNew: boolean = true;
  employeeProjectList: any;

  employeeProjectlist: EmployeeProject[] = [
    {
      name: 'Tajwar Rawat',
      project: 'Project 1',
      assignedDate: '10/05/2020',
    }, {
      name: 'Prakash Rawat',
      project: 'Project 2',
      assignedDate: '10/05/2020',
    }, {
      name: 'Vikas Rawat',
      project: 'Project 3',
      assignedDate: '10/05/2020',
    }, {
      name: 'Deepak Dhiman',
      project: 'Project 4',
      assignedDate: '10/05/2020'
    }];

  employees = [
    {
      id: 0, name: '-- Select Name--'
    }, {
      id: 1,
      name: 'Anoop Rawat'
    }, {
      id: 2,
      name: 'Nirmla Rawat'
    }, {
      id: 3,
      name: 'Anjali Rawat'
    }, {
      id: 4,
      name: 'Deepika Rawat'
    }];

  projects = [
    {
      id: 0, name: '-- Select Project--'
    }, {
      id: 1,
      name: 'Project Breeze'
    }, {
      id: 2,
      name: 'Dynamic Program'
    }, {
      id: 3,
      name: 'Magnetic Program'
    }, {
      id: 4,
      name: 'Project Signal'
    }];
  today: Date;

  constructor() { this.today = new Date();}

  // Function to add new button
  addEmployeeProject() {
    this.isShown = false;
    this.isAddNew = true;
    this.employeeProjectList = [];
  }

  ngOnInit(): void {
  }

  onProjectChange(item: any) {
  }

  onEmployeeChange(item: any) {
  }
}
