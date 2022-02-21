import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  months = [
    {
      id: 0, name: '-- Select Month--'
    }, {
      id: 1,
      name: 'January'
    }, {
      id: 2,
      name: 'February'
    }, {
      id: 3,
      name: 'March'
    }, {
      id: 4,
      name: 'April'
    }, {
      id: 5,
      name: 'May'
    }, {
      id: 6,
      name: 'June'
    }, {
      id: 7,
      name: 'July'
    }, {
      id: 8,
      name: 'August'
    }, {
      id: 9,
      name: 'September'
    }, {
      id: 10,
      name: 'October'
    }, {
      id: 11,
      name: 'November'
    }, {
      id: 12,
      name: 'December'
    }];

  years = [
    {
      id: 0, name: '-- Select Year--'
    }, {
      id: 1,
      name: '2022'
    }, {
      id: 2,
      name: '2021'
    }, {
      id: 3,
      name: '2020'
    }, {
      id: 4,
      name: '2019'
    }, {
      id: 5,
      name: '2018'
    }, {
      id: 6,
      name: '2017'
    }];

  reports = [
    {
      id: 0, name: '-- Select Report Type--'
    }, {
      id: 1,
      name: 'Porject Payment'
    }, {
      id: 2,
      name: 'Employee Payment'
    }, {
      id: 3,
      name: 'Invoice'
    }, {
      id: 4,
      name: 'Others'
    }];

  constructor() { }

  onReportTypeChange(item: any) {

  }

  onYearChange(item: any) {

  }

  onMonthChange(item: any) {

  }

  ngOnInit(): void {
  }

}
