import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface EmployeePayment {
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

  dtOptions: DataTables.Settings = {};

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
  isAddNew: boolean = true;
  
  employeePaymentList: EmployeePayment[] = [
    {
      employeeName: 'Subhash Rawat',
      amount: '₹ 70,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Tajwar Rawat',
      amount: '₹ 90,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Prakash Rawat',
      amount: '₹ 50,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Vikash Rawat',
      amount: '₹ 40,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Deepak Dhiman',
      amount: '₹ 1,00,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Subhash Rawat',
      amount: '₹ 70,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Tajwar Rawat',
      amount: '₹ 90,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Prakash Rawat',
      amount: '₹ 50,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Vikash Rawat',
      amount: '₹ 40,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Deepak Dhiman',
      amount: '₹ 1,00,000',
      month: '02/2022',
      paymentDate: '28/07/2020'
    }, {
      employeeName: 'Subhash Rawat',
      amount: '₹ 70,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Tajwar Rawat',
      amount: '₹ 90,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Prakash Rawat',
      amount: '₹ 50,000',
      month: '02/2022',
      paymentDate: '28/12/2019'
    }, {
      employeeName: 'Vikash Rawat',
      amount: '₹ 40,000',
      month: '02/2022',
      paymentDate: '28/01/2021'
    }, {
      employeeName: 'Deepak Dhiman',
      amount: '₹ 1,00,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Subhash Rawat',
      amount: '₹ 70,000',
      month: '02/2022',
      paymentDate: '28/02/2020'
    }, {
      employeeName: 'Tajwar Rawat',
      amount: '₹ 90,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Prakash Rawat',
      amount: '₹ 50,000',
      month: '02/2022',
      paymentDate: '28/02/2021'
    }, {
      employeeName: 'Vikash Rawat',
      amount: '₹ 40,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }, {
      employeeName: 'Deepak Dhiman',
      amount: '₹ 1,00,000',
      month: '02/2022',
      paymentDate: '28/02/2022'
    }];


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


  today: Date;


  constructor() { this.today = new Date(); }

  addEmployeePayment() {
    this.isShown = false;
    this.isAddNew = true;
  }

  onGridYearChange(item: any) {

  }

  onGridMonthChange(item: any) {

  }

  onEmployeeChange(item: any) {

  }

  onYearChange(item: any) {

  }

  onMonthChange(item: any) {

  }

  

  ngOnInit(): void {
  }

}
