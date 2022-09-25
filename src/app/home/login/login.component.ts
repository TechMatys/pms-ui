import { Component, OnInit } from '@angular/core';import { faEdit, faTrash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/core/services/https/http.service';
import {Router} from 'angular2/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,
    private http: HttpService) { 

      this.loginForm = this.formBuilder.group({
        emailAddress: [null, Validators.required],        
        password: [null, Validators.required]
      });

    }

    submitLogin() {
      this.router.navigateByUrl('<pathDefinedInRouteConfig>');
      alert('Login')
    }

  ngOnInit(): void {
  }

}
