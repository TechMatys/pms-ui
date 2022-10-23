import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/https/http.service';
import { ToastrService } from 'ngx-toastr';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

interface EmployeeTaskDetail {
  employeeName: string;
  taskDate: string;
  status: string;
  createdDate: string;
}

@Component({
  selector: 'app-employee-task-details',
  templateUrl: './employee-task-details.component.html'
})

export class EmployeeTaskDetailsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  faDelete = faTrash;
  faView = faEye;

  controllerName = "employee/0/task";

  employeeTaskDetailList: EmployeeTaskDetail[] = [];

  constructor(private http: HttpService, private toastr: ToastrService, private popUpService: PopUpService) { }

  deleteTask(task: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this employee task?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          var taskId = task.employeeTaskDetailId;
          this.http.delete(this.controllerName, taskId).subscribe(res => {
            this.toastr.success("Employee task deleted successfully", "Success");
            this.getAllEmployeeTaskDetails();
          });
        }
      });
  }

  viewTask(task: any) {
    this.http.get(this.controllerName, task.employeeTaskDetailId)
      .subscribe(res => {

      });
  }

  getAllEmployeeTaskDetails() {
    this.http.getAll(this.controllerName).subscribe(res => {
      this.employeeTaskDetailList = res;
    });
  }

  ngOnInit(): void {
    this.getAllEmployeeTaskDetails();
  }

}
