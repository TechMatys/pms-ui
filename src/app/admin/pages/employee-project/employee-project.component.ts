import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface EmployeeProject {
  name : string;
  project: any;
  date: any;
 
  
}

@Component({
  selector: 'app-employee-project',
  templateUrl: './employee-project.component.html',
  styleUrls: ['./employee-project.component.scss']
})
export class EmployeeProjectComponent implements OnInit {

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = false;
  isAddNew: boolean = true;
  employeeProjectList: any;

  employeeprojectlist: EmployeeProject[] = [
    {
      name: 'Tajwar Rawat',
      project: 'project1',
      date: '10/05/2020',
    }, {
      name: 'Prakash Rawat',
      project: 'project2',
      date: '10/05/2020',
    }, {
      name: 'Vikas Rawat',
      project: 'project3',
      date: '10/05/2020',
    }, {
      name: 'Deepak Dhiman',
      project: 'project4',
      date: '10/05/2020'
    }, ];

  employees= [
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
 
  constructor() { }
  // Function to add new button
  addEmployeeProject() {
    this.isShown = false;
    this.isAddNew = true;
    this.employeeProjectList = [];
  }
  ngOnInit(): void {
    {
      this.isShown = !this.isShown;
    }
  }
  onProjectChange(item: any) {
  }
  onEmployeeChange(item: any) {
  }
}
