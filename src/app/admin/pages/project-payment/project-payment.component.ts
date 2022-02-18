import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProjectComponent } from '../project/project.component';

interface Payment {
  name: string;
  amount: string;
  month: any;
  date: any;
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
  paymentList: any;
  selectedYear: number ;
years: number[] = [];
selectedMonth: any;
months: any[]=[];


  paymentlist: Payment[] = [
    {
      name: 'Vikas Rawat',
      month: 'may 2020',
      amount: 'In Progress',
      date: '10-05-2020',
    },
    {
      name: 'prakash Rawat',
      month: 'may 2020',
      amount: '2000',
      date: '10-05-2020',
    },
    {
      name: 'ganesh Rawat',
      month: 'may 2020',
      amount: '500',
      date: '10-05-2020',
    },
    {
      name: 'Vikky Rawat',
      month: 'may 2020',
      amount: '600',
      date: '10-05-2020'

    },
    {
      name: 'rudra Rawat',
      month: 'may 2020',
      amount: '700',
      date: '10-05-2020'
    },
  ]
  




  constructor() { 

    this.selectedYear = new Date().getFullYear();
  for (let year = this.selectedYear; year >= 2015; year--) {
    this.years.push(year);
  }
  
 
  }
 // Function to add new button
 addPayment() {
  this.isShown = false;
  this.isAddNew = true;
  this.paymentList = [];
}
  ngOnInit(): void {
    this.isShown = !this.isShown;
  }
  

}
