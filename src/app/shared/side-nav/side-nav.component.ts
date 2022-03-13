import { Component, OnInit } from '@angular/core';
import { faDashboard, faUsers, faUser, faProjectDiagram, faAngleDown, faAngleRight, faMoneyBill, faFile, faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html'
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
    if (menuName === "Project") {
      this.isCollapsedProject = !this.isCollapsedProject;
      this.isCollapsedEmployee = true;
      this.isCollapsedCompany = true;
      return;
    }
    else if (menuName === "Employee") {
      this.isCollapsedEmployee = !this.isCollapsedEmployee;
      this.isCollapsedProject = true;
      this.isCollapsedCompany = true;
      return;
    }
    else if (menuName === "Company") {
      this.isCollapsedCompany = !this.isCollapsedCompany;
      this.isCollapsedEmployee = true;
      this.isCollapsedProject = true;
      return;
    }
    else{
      this.isCollapsedEmployee = true;
      this.isCollapsedProject = true;
      this.isCollapsedCompany = true;
    }
  }

  ngOnInit(): void {
  }

}
