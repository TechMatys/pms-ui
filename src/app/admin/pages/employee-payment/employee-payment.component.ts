import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from 'src/app/core/services/https/http.service';
interface EmployeePayment {
  employeeName: string,
  amount: string;
  month: string;
  paymentDate: string;
  
}
interface Employee {
employeeId: number;
firstName : string;
lastName : string;
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
  employees: Employee[] = [];


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
  }, {
    id: 11, name: 'November'
  }, {
    id: 12, name: 'December'
  }];

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
  }];
  today: Date;


  constructor(private http: HttpService) { this.today = new Date(); }

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
  getAllemployees() {
    this.http.getAll('employee').subscribe(res => {
      this.employees = res;
    });

  }
  

  ngOnInit(): void {
    this.getAllemployees();
  }

}
