import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Project {
  name: string;
  startDate: string;
  status: string;
  type : string;
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
      name: 'Vikas Rawat',
      startDate: '10-05-2020',
      status: 'In Progress',
      type : 'ASP.net Core'

    },
    {
      name: 'Rudra Pratap Singh Bartwal',
      startDate: '19-05-2021',
      status: 'In Progress',
      type : 'Python'

    },
    {
      name: 'Prakash Rawat',
      startDate: '10-04-2020',
      status: 'In Progress',
      type : 'Angular'

    },
    {
      name: 'Sumit Rawat',
      startDate: '20-04- 2020',
      status: 'In Progress',
      type : 'CSS'

    },
    {
      name: 'Ganesh Rawat',
      startDate: '10-06-2020',
      status: 'In Progress',
      type : 'HTML'
    },
  ]


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

}
