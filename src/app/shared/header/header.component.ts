import { Component, OnInit } from '@angular/core';
import { faSignOut, faUser, faGear} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  
  faSignOut = faSignOut;
  faProfile = faUser;
  faArrowRight = faGear;
 
  roleId = localStorage.getItem('roleId');

  username = this.roleId === '1' ? 'Admin' : "Employee";
  
  constructor() { }

  ngOnInit(): void {
  }

}
