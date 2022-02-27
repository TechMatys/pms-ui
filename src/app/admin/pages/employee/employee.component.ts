import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalCodesService, GlobalCodes } from 'src/app/core/services/global-codes/global-codes.service';

interface Employee {
  name: string,
  emailAddress: string;
  startDate: string;
  designation: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  employeeForm: FormGroup;
  submitted = false;
  today: Date;

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
  isAddNew: boolean = true;

  employeeList: Employee[] = [
    {
      name: 'Earl of Lemongrab',
      emailAddress: 'earllemongrab12@gmail.com',
      startDate: '12/11/2000',
      designation: 'Lemon Candy',
    },
    {
      name: 'Bonnibel Bubblegum',
      emailAddress: 'bonnibelbubblegum13@gmail.com',
      startDate: '14/05/1990',
      designation: 'Lemon Candy',
    },
    {
      name: 'Phoebe',
      emailAddress: 'phoebe15@gmail.com',
      startDate: '17/12/2010',
      designation: 'Lemon Candy',
    },
    {
      name: 'Lumpy Space Princess',
      emailAddress: 'lumpyprincess20@gmail.com',
      startDate: '14/07/2005',
      designation: 'Lemon Candy',
    }];

  // State name create
  states = [{
    id: 0, name: '-- Select State --'
  }, {
    id: 1, name: 'Uttarakhand'
  }, {
    id: 2, name: 'Bihar'
  }, {
    id: 2, name: 'Himachal Pradesh'
  }];
  
  genders: GlobalCodes[];   
  designations: GlobalCodes[];
  status: GlobalCodes[];
  
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService, private globalCodesService: GlobalCodesService) {
    
    this.genders = this.globalCodesService.genders;
    this.designations = this.globalCodesService.designations;
    this.status = this.globalCodesService.status;
    this.today = new Date();

    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      mobile: ['', Validators.required]
    });
    
  }
  

  addEmployee() {
    this.isShown = false;
    this.isAddNew = true;
  }

  onDesignationChange(item: any) {
  }

  onGenderChange(item: any) {
  }
  
  onStatusChange(item: any) {

  }

  deleteEmployee(employee: any) {    
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this employee?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.toastr.success("Employee deleted successfully", "Sucess");
        }
      });
  }

  get f() { return this.employeeForm.controls; }

  saveEmployee() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.employeeForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employeeForm.value))
  }

  ngOnInit(): void {
  }
}
