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

  dtOptions: DataTables.Settings = {};

  expenseForm: FormGroup;
  submitted = false;

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
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

  
  uploadedFiles = [{
    name: 'Reciept.pdf'
  },{
    name: 'Bill.pdf'
  }];
  date: string | undefined;
  today: Date;

  constructor(private formBuilder: FormBuilder) {
    this.today = new Date();
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


  ngOnInit(): void {this.date = new Date().toISOString().slice(0, 10);
  }

}
