import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';



interface Project
 {
  
  name: string;
  starting: string;
  status: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class  ProjectComponent implements OnInit {

 faEdit=faEdit
 faDelete= faTrash
  projectlist: Project []
  
  = [
    {
      name: 'Vikas Rawat',
     starting : '10-05-2020',
      status: 'In Progress',
     
    },
    {
      name: 'Rudra Pratap Singh Bartwal',
     starting : '19-05-2021',
      status: 'In Progress',
     
    },
    {
      name: 'Prakash Rawat',
     starting : '10-04-2020',
      status: 'In Progress',
     
    },
    {
      name: 'Sumit Rawat',
     starting : '20-04- 2020',
      status: 'In Progress',
     
    },
    {
      name: 'Ganesh Rawat',
     starting : '10-06-2020',
     status: 'In Progress',
     
    },
  ]

  isShown: boolean = false;
  isAddNew: boolean = true;
  projectList: any;
  createProjectForm: any;
  projectData: any;
  projectForm: any;

  

  constructor() { }


  // Function to add new button
addbutton(){
  this.isShown = false;
  this.isAddNew = true;
  this.projectList = [];
  const data = {
    projectName: '',
    starting: '',
    status: ''
  }
  
  
    }
  
    save() {
      this.projectData = this.projectForm.value;
  
      const data = Object.assign({}, this.projectData);
    }
    

  ngOnInit(): void {{this.isShown = !this.isShown;
  }
  }

}
