import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Employer {
  name: string,
  startDate: string;
  designation: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  
  faEdit= faEdit
  faDelete= faTrash

  employerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    description: new FormControl('')
  });
 
   employer: Employer[] = [
    {
      name: 'Earl of Lemongrab',
      startDate: '12/11/2000',
      designation: 'Lemon Candy',
    },
    {
      name: 'Bonnibel Bubblegum',
      startDate: '14/5/1990',
      designation: 'Lemon Candy',
    },
    {
      name: 'Phoebe',
      startDate: '17/12/2010',
      designation: 'Lemon Candy',
    },
    {
      name: 'Lumpy Space Princess',
      startDate: '14/7/2005',
      designation: 'Lemon Candy',
    },
  ]

  isShown: boolean = false;
  isAddNew: boolean = true;
  employerData: any;
  fB: any;
  http: any;
  isValidDate: boolean | undefined;
  error: { isError: boolean; errorMessage: string; } | undefined;


  constructor() { 

  }

  addEmployer() {
    this.isShown = false;
    this.isAddNew = true;
    const data = {
      title: '',
      description: '',
      htmlContent: ''
    }
  this.createEmployerForm(data);
}

saveEmployer() {
  this.employerData = this.employerForm.value;

  const data = Object.assign({}, this.employerData);

 
}

createEmployerForm(data: any) {
  this.employerForm = this.fB.group({
    title: [data.title],
    description: [data.description],
    htmlContent: [data.htmlContent]
  });
}


updateEmployer() {
  this.employerData = this.employerForm.value;

  const data = Object.assign({}, this.employerData);
  
}



  ngOnInit(): void {
    this.isShown = !this.isShown;
  }
  

}
