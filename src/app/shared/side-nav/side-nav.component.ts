import { Component, OnInit } from '@angular/core';
import { faDashboard, faUsers, faUser, faProjectDiagram, faAngleDown, faAngleRight, faMoneyBill, faFile} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  faDashboard = faDashboard;
  faUsers = faUsers;
  faProject = faProjectDiagram;
  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;
  faMoney = faMoneyBill;
  faUser = faUser;
  faFile = faFile;
  isCollapsedEmployee = true;
  isCollapsedPoject = true;

  constructor() { }

  ngOnInit(): void {
  }

}
