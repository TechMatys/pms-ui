import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Project {
  name: string,
  startDate: string,
  status: string,
  type : string
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = false;
  isAddNew: boolean = true;
  projectList: any;
  
  projectlist: Project[] = [
    {
      name: 'Project 1',
      startDate: '10/05/2020',
      status: 'In Progress',
      type : 'ASP.Net Core'
    },{
      name: 'Project 2',
      startDate: '19/05/2021',
      status: 'In Progress',
      type : 'Python'
    },{
      name: 'Project 3',
      startDate: '10/04/2020',
      status: 'In Progress',
      type : 'Angular'
    },{
      name: 'Project 4',
      startDate: '20/04/2020',
      status: 'In Progress',
      type : 'CSS'
    },{
      name: 'Project 5',
      startDate: '10/06/2020',
      status: 'In Progress',
      type : 'HTML'
    }]


  status = [{
    id: 0, name: '-- Select Status --'
  }, {
    id: 1, name: 'In Progress'
  }, {
    id: 2, name: 'On Hold'
  }, {
    id: 3, name: 'Pending'
  }, {
    id: 4, name: 'Completed'
  }];

  durations = [{
    id: 0, name: '-- Select Duration --'
  }, {
    id: 1, name: 'Monthly'
  }, {
    id: 2, name: 'One Time'
  }];
  

  types = [{
    id: 0, name: '-- Select Project Type --'
  }, {
    id: 1, name: 'HTML'
  }, {
    id: 2, name: 'Angular'
  },
  {
    id: 3, name: 'Python'
  }, {
    id: 4, name: '.Net Core'
  }];
  constructor() { }


  // Function to add new button
  addProject() {
    this.isShown = false;
    this.isAddNew = true;
    this.projectList = [];
  }

  ngOnInit(): void {
    {
      this.isShown = !this.isShown;
    }
  }

  onStatusChange(item: any) {

  }

  onDurationChange(item: any) {

  }
  onProjectChange(item: any) {

  }

}
