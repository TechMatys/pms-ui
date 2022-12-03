import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {

  reports = [
    {
      id: 0, name: '-- Select Report Type--'
    }, {
      id: 1,
      name: 'Project Payment'
    }, {
      id: 2,
      name: 'Employee Payment'
    }, {
      id: 3,
      name: 'Invoices'
    }, {
      id: 4,
      name: 'Others'
    }];
  today: Date;

  constructor() {  this.today = new Date();}

  onReportTypeChange(item: any) {

  }

  ngOnInit(): void {
  }

}
