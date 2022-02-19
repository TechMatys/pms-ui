import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

interface Employer {
  name: string,
  emailAddress: string;
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
      emailAddress: 'earllemongrab12@gmail.com',
      startDate: '12/11/2000',
      designation: 'Lemon Candy',
    },
    {
      name: 'Bonnibel Bubblegum',
      emailAddress: 'bonnibelbubblegum13@gmail.com',
      startDate: '14/05/1990',
      designation: 'Lemon Candy',
    },
    {
      name: 'Phoebe',
      emailAddress: 'phoebe15@gmail.com',
      startDate: '17/12/2010',
      designation: 'Lemon Candy',
    },
    {
      name: 'Lumpy Space Princess',
      emailAddress: 'lumpyprincess20@gmail.com',
      startDate: '14/07/2005',
      designation: 'Lemon Candy',
    }];

  genders = [{
    id: 0, name: '-- Select Gender --'
  }, {
    id: 1, name: 'Male'
  }, {
    id: 2, name: 'Female'
  }];

  designations = [{
    id: 0, name: '-- Select Designations --'
  }, {
    id: 1, name: 'Developer'
  }, {
    id: 2, name: 'Manager'
  }];

  // State name create
  states = [{
    id: 0, name: '-- Select State --'
  }, {
    id: 1, name: 'Uttarakhand'
  }, {
    id: 2, name: 'Bihar'
  }, {
    id: 2, name: 'Himachal Pradesh'
  }];

  constructor() {
  }

  addEmployee() {
    this.isShown = false;
    this.isAddNew = true;
  }

  onDesignationChange(item: any) {
  }

  onGenderChange(item: any) {
  }

  ngOnInit(): void {
    this.isShown = !this.isShown;
  }
}
