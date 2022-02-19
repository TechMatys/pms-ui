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
  month:any;
  year : any



  paymentlist: Payment[] = [
    {
      name: 'Vikas Rawat',
      month: 'May 2020',
      amount: '₹ 5,000',
      date: '10-05-2020',
    },
    {
      name: 'Prakash Rawat',
      month: 'May 2020',
      amount: '₹ 2,000',
      date: '10-05-2020',
    },
    {
      name: 'Ganesh Rawat',
      month: 'May 2020',
      amount: '₹ 5,000',
      date: '10-05-2020',
    },
    {
      name: 'Vikky Rawat',
      month: 'May 2020',
      amount: '₹ 6,000',
      date: '10-05-2020'

    },
    {
      name: 'Rudra Rawat',
      month: 'May 2020',
      amount: '₹ 7,000',
      date: '10-05-2020'
    },
  ]
  months = [
    {
      id: 0, name: '-- Select Month--'
    },
    {
    id: 1,
    name: 'January'
},
{
    id: 2,
    name: 'Febuary'
},
{
    id: 3,
    name: 'March'
},
{
    id: 4,
    name: 'April'
},
{
    id: 5,
    name: 'May'
},
{
    id: 6,
    name: 'June'
},
{
    id: 7,
    name: 'July'
},
{
    id: 8,
    name: 'August'
},
{
    id: 9,
    name: 'Septmber'
},
{
    id: 10,
    name: 'October'
},
{
    id: 11,
    name: 'November'
},
{
    id: 12,
    name: 'December'
}
];

  
years = [
  {
    id: 0, name: '-- Select Year--'
  },
  {
  id: 1,
  name: '2022'
},
{
  id: 2,
  name: '2021'
},
{
  id: 3,
  name: '2020'
},
{
  id: 4,
  name: '2019'
},
{
  id: 5,
  name: '2018'
},
{
  id: 6,
  name: '2017'
},

];

projects = [
  {
    id: 0, name: '-- Select project--'
  },
  {
  id: 1,
  name: 'Project Breeze'
},
{
  id: 2,
  name: 'Dynamic Program'
},
{
  id: 3,
  name: 'Magnetic Program'
},
{
  id: 4,
  name: 'Project Signal'
},


];




  constructor( ) { 

   
 
 
  }
 // Function to add new button
 addPayment() {
  this.isShown = false;
  this.isAddNew = true;
  this.paymentList = [];
}


onChange(country: any) {

}

  ngOnInit(): void {
    this.isShown = !this.isShown;
    
  }
  

}
