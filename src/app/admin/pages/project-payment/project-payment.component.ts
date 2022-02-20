import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface ProjectPayment {
  name: string;
  receivedAmount: string;
  month: any;
  paymentDate: any;
}

@Component({
  selector: 'app-project-payment',
  templateUrl: './project-payment.component.html',
  styleUrls: ['./project-payment.component.scss']
})


export class ProjectPaymentComponent implements OnInit {
  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = false;
  isAddNew: boolean = true;
  
  projectPaymentlist: ProjectPayment[] = [
    {
      name: 'Vikas Rawat',
      month: 'May 2020',
      receivedAmount: '₹ 5,000',
      paymentDate: '10/05/2020',
    }, {
      name: 'Prakash Rawat',
      month: 'May 2020',
      receivedAmount: '₹ 2,000',
      paymentDate: '10/05/2020',
    }, {
      name: 'Ganesh Rawat',
      month: 'May 2020',
      receivedAmount: '₹ 5,000',
      paymentDate: '10/05/2020',
    }, {
      name: 'Vikky Rawat',
      month: 'May 2020',
      receivedAmount: '₹ 6,000',
      paymentDate: '10/05/2020'
    }, {
      name: 'Rudra Rawat',
      month: 'May 2020',
      receivedAmount: '₹ 7,000',
      paymentDate: '10/05/2020'
    }];

  months = [
    {
      id: 0, name: '-- Select Month--'
    }, {
      id: 1,
      name: 'January'
    }, {
      id: 2,
      name: 'February'
    }, {
      id: 3,
      name: 'March'
    }, {
      id: 4,
      name: 'April'
    }, {
      id: 5,
      name: 'May'
    }, {
      id: 6,
      name: 'June'
    }, {
      id: 7,
      name: 'July'
    }, {
      id: 8,
      name: 'August'
    }, {
      id: 9,
      name: 'September'
    }, {
      id: 10,
      name: 'October'
    }, {
      id: 11,
      name: 'November'
    }, {
      id: 12,
      name: 'December'
    }];

  years = [
    {
      id: 0, name: '-- Select Year--'
    }, {
      id: 1,
      name: '2022'
    }, {
      id: 2,
      name: '2021'
    }, {
      id: 3,
      name: '2020'
    }, {
      id: 4,
      name: '2019'
    }, {
      id: 5,
      name: '2018'
    }, {
      id: 6,
      name: '2017'
    }];

  projects = [
    {
      id: 0, name: '-- Select project--'
    }, {
      id: 1,
      name: 'Project Breeze'
    }, {
      id: 2,
      name: 'Dynamic Program'
    }, {
      id: 3,
      name: 'Magnetic Program'
    }, {
      id: 4,
      name: 'Project Signal'
    }];

  constructor() {
  }

  // Function to add new button
  addProjectPayment() {
    this.isShown = false;
    this.isAddNew = true;
  }


  onGridYearChange(item: any) {

  }

  onGridMonthChange(item: any) {

  }

  onProjectChange(item: any) {

  }

  onYearChange(item: any) {

  }

  onMonthChange(item: any) {

  }

  ngOnInit(): void {
    this.isShown = !this.isShown;
  }

}
