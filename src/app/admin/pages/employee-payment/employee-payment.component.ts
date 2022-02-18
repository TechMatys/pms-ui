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
  selectedYear: number;
  years: number[] = [];
  selectedMonth: number;
  months: number[] = [];

  employer: Employer[] = [
    {
      employeeName: 'Subhash Rawat',
      amount: '70000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },
    {
      employeeName: 'Tajwar Rawat',
      amount: '90000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },
    {
      employeeName: 'Prakash Rawat',
      amount: '50000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },
    {
      employeeName: 'Vikash Rawat',
      amount: '40000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },

    {
      employeeName: 'Deepak Dhiman',
      amount: '100000',
      month: '02/2022',
      paymentDate: '28/2/2022',

    },
  ]



  constructor() {
    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= 2020; year--) {
      this.years.push(year);
    }
    this.selectedMonth = new Date().getMonth() + 11;
    for (let month = this.selectedMonth; month >= 1; month--) {
      this.months.push(month);
    }
  }

  addEmployer() {
    this.isShown = false;
    this.isAddNew = true;
  }

  ngOnInit(): void {
  }

}
