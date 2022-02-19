import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Employer {
  employeeName: string,
  amount: string;
  month: string;
  paymentDate: string;
}

@Component({
  selector: 'app-employee-payment',
  templateUrl: './employee-payment.component.html',
  styleUrls: ['./employee-payment.component.scss']
})
export class EmployeePaymentComponent implements OnInit {

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
  isAddNew: boolean = true;
  month: any;
  year: any;

  employer: Employer[] = [
    {
      employeeName: 'Subhash Rawat',
      amount: '70,000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },
    {
      employeeName: 'Tajwar Rawat',
      amount: '90,000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },
    {
      employeeName: 'Prakash Rawat',
      amount: '50,000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },
    {
      employeeName: 'Vikash Rawat',
      amount: '40,000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },

    {
      employeeName: 'Deepak Dhiman',
      amount: '1,00,000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },
  ];


  // --Select Employee Name Create--
  employees = [{
    id: 0, name: '-- Select Employee --'
  }, {
    id: 1, name: 'Subhash Rawat'
  }, {
    id: 2, name: 'Tajwar Rawat'
  }, {
    id: 3, name: 'Prakash Rawat'
  }, {
    id: 4, name: 'Deepak Dhiman'
  }, {
    id: 5, name: 'Vikash Rawat'
  }, {
    id: 6, name: 'Vikram Rawat'
  }];


 // --Select Month Create--  
  months = [{
    id: 0, name: '-- Select Month --'
  }, {
    id: 1, name: 'January'
  }, {
    id: 2, name: 'February'
  }, {
    id: 3, name: 'March'
  }, {
    id: 4, name: 'April'
  }, {
    id: 5, name: 'May'
  }, {
    id: 6, name: 'June'
  }, {
    id: 7, name: 'July'
  }, {
    id: 8, name: 'August'
  }, {
    id: 9, name: 'September'
  }, {
    id: 10, name: 'October'
  },  {
    id: 11, name: 'November'
  },  {
    id: 12, name: 'December'
  },];

  // --Select Year Create--
  years = [{
    id: 0, name: '-- Select Year --'
  }, {
    id: 1, name: '2022'
  }, {
    id: 2, name: '2021'
  }, {
    id: 3, name: '2020'
  }, {
    id: 4, name: '2019'
  }, {
    id: 5, name: '2018'
  },];



  constructor() { }

  addEmployer() {
    this.isShown = false;
    this.isAddNew = true;
  }

  onChange(employee: any) {
  }

  ngOnInit(): void {
  }

}
