import { Component, OnInit } from '@angular/core';
import { faSignOut, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  faSignOut = faSignOut;
  faProfile = faUser;
  isCollapsed = true;
 
  constructor() { }

  ngOnInit(): void {
  }

}
