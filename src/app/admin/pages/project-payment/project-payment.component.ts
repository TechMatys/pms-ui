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

  dtOptions: DataTables.Settings = {};
  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
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
  today: Date;

  constructor() { this.today = new Date();}

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
  }

}
