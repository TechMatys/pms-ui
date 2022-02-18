import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Employer {
  employeename: string,
  amount: string;
  month: string;
  paymentdate: string;
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
      employeename: 'Subhash Rawat',
      amount: '70000',
      month: '02/2022',
      paymentdate: '28/2/2022',

    },
    {
      employeename: 'Tajwar Rawat',
      amount: '90000',
      month: '02/2022',
      paymentdate: '28/2/2022',

    },
    {
      employeename: 'Prakash Rawat',
      amount: '50000',
      month: '02/2022',
      paymentdate: '28/2/2022',

    },
    {
      employeename: 'Vikash Rawat',
      amount: '40000',
      month: '02/2022',
      paymentdate: '28/2/2022',

    },

    {
      employeename: 'Deepak Dhiman',
      amount: '100000',
      month: '02/2022',
      paymentdate: '28/2/2022',

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
