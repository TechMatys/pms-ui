import { Component, OnInit } from '@angular/core';
import { GlobalCodesService, GlobalCodes } from 'src/app/core/services/global-codes/global-codes.service';
import { HttpService } from 'src/app/core/services/https/http.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  genders: GlobalCodes[] = [];
  userId = 7;
  today: Date;
  userForm: FormGroup;
  submitted = false;
  faCalendar = faCalendarAlt;
  controllerName = "Account";

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private globalCodesService: GlobalCodesService, private http: HttpService) {
    this.today = new Date();
    this.genders = this.globalCodesService.genders;

    this.userForm = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      emailAddress: [null],
      gender: [0],
      dateOfBirth: new FormControl(this.today),
      mobile: [null],
      password: [null],
      confirmPassword: [null],
      userId: [0]
    });
  }

  getGenders() {
    this.globalCodesService.getGlobalCodes("genders").subscribe(res => {
      this.genders = res;
    });
  }
  get f(){
    return this.userForm.controls;
  }
  getUserById() {
    this.http.get(this.controllerName,  this.userId)
    .subscribe(res => {
      this.userForm.setValue(res);
    });
  }

  saveProfile() {
    this.submitted = true;
    this.http.update(this.controllerName, this.userId, this.userForm.value)
      .subscribe(res => {
        this.toastr.success("Profile updated successfully", "Success");
        this.getUserById();
      });
  }

  ngOnInit(): void {
    this.getGenders();
    this.getUserById();
  }
}
