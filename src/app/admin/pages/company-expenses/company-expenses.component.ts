import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Expenses {
  expenseName: string,
  amount: string;
  month: string;
  expenseDate: string;
}

@Component({
  selector: 'app-company-expenses',
  templateUrl: './company-expenses.component.html',
  styleUrls: ['./company-expenses.component.scss']
})
export class CompanyExpensesComponent implements OnInit {

  expenseForm: FormGroup;
  submitted = false;

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = false;
  isAddNew: boolean = true;
  
  expenseList: Expenses[] = [
    {
      expenseName: 'Expense 1',
      amount: '₹ 4,000',
      month: '02/2022',
      expenseDate: '28/02/2022'
    }, {
      expenseName: 'Expense 2',
      amount: '₹ 4,000',
      month: '02/2022',
      expenseDate: '28/02/2022'
    }, {
      expenseName: 'Expense 3',
      amount: '₹ 4,000',
      month: '02/2022',
      expenseDate: '28/02/2022'
    }, {
      expenseName: 'Expense 4',
      amount: '₹ 4,000',
      month: '02/2022',
      expenseDate: '28/02/2022'
    }, {
      expenseName: 'Expense 5',
      amount: '₹ 4,000',
      month: '02/2022',
      expenseDate: '28/02/2022'
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


  constructor(private formBuilder: FormBuilder) { 
  this.expenseForm = this.formBuilder.group({   
    name: ['', Validators.required]
  });
}

  addExpenses() {
    this.isShown = false;
    this.isAddNew = true;
  }

  onGridYearChange(item: any) {

  }

  onGridMonthChange(item: any) {

  }


onYearChange(item: any) {

}

onMonthChange(item: any) {

}
get f() { return this.expenseForm.controls; }

  saveExpense() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.expenseForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.expenseForm.value))
  }


  ngOnInit(): void {
    this.isShown = !this.isShown;
  }

}
