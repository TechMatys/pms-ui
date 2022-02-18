import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

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

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = false;
  isAddNew: boolean = true;

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

  constructor() {
  }

  addEmployer() {
    this.isShown = false;
    this.isAddNew = true;
  }

  ngOnInit(): void {
    this.isShown = !this.isShown;
  }
}
