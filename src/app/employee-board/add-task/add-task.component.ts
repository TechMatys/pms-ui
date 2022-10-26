import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { GlobalCodesService, GlobalCodes } from 'src/app/core/services/global-codes/global-codes.service';
import { HttpService } from 'src/app/core/services/https/http.service';

interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  employeeTaskForm: FormGroup;
  submitted = false;
  today: Date;
  maxDate: Date;

  faCalendar = faCalendarAlt;
  faAdd = faAdd;
  faDelete = faTrash;
  controllerName = "employee";

  employeeList: Employee[] = [];
  statusList: GlobalCodes[] = [];

  constructor(private fb: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,
    private globalCodesService: GlobalCodesService, private http: HttpService) {

    this.statusList = this.globalCodesService.status;
    this.today = new Date();
    this.maxDate = new Date();

    this.employeeTaskForm = this.fb.group({
      employeeId: [0, [Validators.required, Validators.min(1)]],
      subject: [null, Validators.required],
      taskDate: new FormControl(this.today),
      statusId: [0, [Validators.required, Validators.min(1)]],
      note: '',
      subtaskDetails: this.fb.array([]),
      managedBy: [-1],
    });
  }

  getAllEmployees() {
    this.http.getAll('employee').subscribe(res => {
      this.employeeList = res;
    });
  }

  getStatus() {
    this.globalCodesService.getGlobalCodes("task-status").subscribe(res => {
      this.statusList = res;
    });
  }

  resetForm() {
    this.submitted = false;
    this.employeeTaskForm.reset();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 2);
    this.employeeTaskForm.controls['employeeId'].setValue(0);
    this.employeeTaskForm.controls['taskDate'].setValue(this.maxDate);
    this.employeeTaskForm.controls['statusId'].setValue(0);
    this.employeeTaskForm.controls['managedBy'].setValue(-1);
    const subtask = this.employeeTaskForm.get("subtaskDetails") as FormArray;
    if (subtask.length) {
      subtask.value.forEach((item: any, index: number) => {
        subtask.removeAt(index)
      });
      subtask.removeAt(0);
    }
  }

  get f() { return this.employeeTaskForm.controls; }

  saveEmployeeTask() {
    this.submitted = true;

    //stop here if form is invalid
    if (this.employeeTaskForm.invalid) {
      return;
    }

    this.createEmployeeTask();
  }

  createEmployeeTask() {
    if (this.validateSubtask()) {
      const subtaskList = this.employeeTaskForm.get("subtaskDetails") as FormArray;
      let employeeTaskData = this.employeeTaskForm.value;
      const employeeId = employeeTaskData.employeeId;
      employeeTaskData.subtaskDetails = subtaskList.value;

      this.http.create(this.controllerName + '/' + employeeId + '/task', employeeTaskData)
        .subscribe(res => {
          if (res > 0) {
            this.toastr.success("Employee task saved successfully.", "Success");
            this.resetForm();
          }
          else if (res < 0) {
            this.toastr.warning("Employee task already added for selected date.", "Warning");
          }
          else {
            this.toastr.error("Error in employee task saving.", "Error");
          }
        });
    }
  }

  validateSubtask() {
    const subtask = this.employeeTaskForm.get("subtaskDetails") as FormArray;
    var isValidTitle = true, isValidStatus = true;
    if (subtask.length) {
      subtask.value.forEach((item: any) => {
        if (item.title === "") {
          isValidTitle = false;
        }
        if (item.statusId === 0 || item.statusId === '0') {
          isValidStatus = false;
        }
      });
    }
    if (!isValidTitle) {
      this.toastr.warning("Title can't be blank.", "Warning");
      return false;
    }
    else if (!isValidStatus) {
      this.toastr.warning("Please select status.", "Warning");
      return false;
    }
    else {
      return true;
    }
  }

  addNewSubtask() {
    const subtask = this.employeeTaskForm.get("subtaskDetails") as FormArray;
    if (subtask.value.length < 5) {
      subtask.push(this.fb.group({
        title: '',
        statusId: 0,
      }));
    }
    else {
      this.toastr.warning("Can't add more than 5 subtask.", "Warning");
    }
  }

  createSubtask(): FormGroup {
    return this.fb.group({
      title: '',
      statusId: 0
    })
  }

  removeTask(index: number) {
    const subtask = this.employeeTaskForm.get("subtaskDetails") as FormArray;
    subtask.removeAt(index)
  }

  ngOnInit(): void {
    this.getStatus();
    this.getAllEmployees();
    this.resetForm();
  }

}
