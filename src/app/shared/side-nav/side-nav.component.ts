import { Component, OnInit } from '@angular/core';
import { faDashboard, faUsers, faUser, faProjectDiagram, faAngleDown, faAngleRight, faMoneyBill, faFile, faBuilding } from '@fortawesome/free-solid-svg-icons';

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
  faCompany = faBuilding;
  isCollapsedEmployee = true;
  isCollapsedProject = true;
  isCollapsedCompany = true;
  activeMenu = "Dashboard";

  constructor() { }

  showSubMenu(menuName: string) {
    this.activeMenu = menuName;
    this.isCollapsedEmployee = true;
    this.isCollapsedProject = true;
    this.isCollapsedCompany = true;
    if (menuName === "Project") {
      this.isCollapsedProject = false;
      return;
    }
    if (menuName === "Employee") {
      this.isCollapsedEmployee = false;
      return;
    }
    if (menuName === "Company") {
      this.isCollapsedCompany = false;
      return;
    }
  }

  ngOnInit(): void {
  }

}
