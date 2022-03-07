import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCalendarAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { GlobalCodesService } from 'src/app/core/services/global-codes/global-codes.service';
import { HttpService } from 'src/app/core/services/https/http.service';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';

interface Expenses {
  title: string,
  amount: string;
  expenseDate: string;
}

@Component({
  selector: 'app-company-expenses',
  templateUrl: './company-expenses.component.html',
  styleUrls: ['./company-expenses.component.scss']
})
export class CompanyExpensesComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};

  expenseForm: FormGroup;
  submitted = false;

  faEdit = faEdit;
  faDelete = faTrash;
  faCalendar = faCalendarAlt;
  isShown: boolean = true;
  isAddNew: boolean = true;
  controllerName = "Company-Expense";


  expenseList: Expenses[] = [];


  uploadedFiles = [{
    name: 'Reciept.pdf'
  }, {
    name: 'Bill.pdf'
  }];

  date: string | undefined;
  today: Date;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,
   private http: HttpService) {

    this.today = new Date();
    this.expenseForm = this.formBuilder.group({
      companyExpenseId: [0],
      title: [null],
      amount: [null],
      expenseDate: new FormControl(this.today),
      notes: [null],
      managedBy: [-1]
    });
  }

  addExpenses() {
    this.resetForm();
    this.isShown = false;
    this.isAddNew = true;
  }

  resetForm() {
    this.expenseForm.reset();
    this.expenseForm.controls['expenseDate'].setValue(this.today);
    this.expenseForm.controls['companyExpenseId'].setValue(0);
    this.expenseForm.controls['managedBy'].setValue(-1);
  }

  deleteExpense(expense: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this expense?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, expense.companyExpenseId)
            .subscribe(res => {
              this.toastr.success("Expense deleted successfully", "Success");
              this.getAllExpenseList();
            });
        }
      });
  }

  editExpense(expense: any) {
    this.http.get(this.controllerName, expense.companyExpenseId)
      .subscribe(res => {
        this.isShown = false;
        this.expenseForm.setValue(res);
      });
  }
  get f() { return this.expenseForm.controls; }

  saveExpense() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.expenseForm.invalid) {
    // //   return;
    // }



    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.expenseForm.value))

    this.expenseForm.controls['managedBy'].setValue(-1);

    const expenseData = this.expenseForm.value;
    const companyExpenseId = expenseData.companyExpenseId;
    if (companyExpenseId < 1) {
      this.http.create(this.controllerName, expenseData)
        .subscribe(res => {
          this.toastr.success("Expense created successfully", "Success");
          this.getAllExpenseList();
        });
    }
    else {
      this.http.update(this.controllerName, companyExpenseId, expenseData)
        .subscribe(res => {
          this.toastr.success("Expense updated successfully", "Success");
          this.getAllExpenseList();
        });
    }
  }

  getAllExpenseList() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.expenseList = res;
    });

  }
  ngOnInit(): void {
    this.getAllExpenseList();
    this.date = new Date().toISOString().slice(0, 10);
  }

}
