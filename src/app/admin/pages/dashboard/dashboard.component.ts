import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  public barChartOptions: ChartConfiguration['options'] = {   

    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.scaleLabel: "<%= ' $' + Number(value)%>"
    scales: {
      x: {
        max: 12,
        grid: {drawBorder: false,
          display: false
        }
      },
      y: {
        max: 200000,
       
        
        grid: {color: "rgb(234, 236, 244)",
        drawBorder: false,
        borderDash: [2],
          display: true
          
        },
        ticks: {stepSize: 50000,
          // Include a dollar sign in the ticks
          callback: function (value : any) {
            return '₹ ' +  dollarIndianLocale.format(value);
          }
        }
      }
      
    },

    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        display: false
        
      },
      tooltip: {
        titleMarginBottom: 10,
        titleColor: '#6e707e',
        bodyColor: '#008223',
        padding: 15,
        backgroundColor: "rgb(255,255,255)",
        borderColor: '#dddfeb',
        borderWidth: 1,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          label: tooltipItem => '₹ ' + tooltipItem.raw,
        }
      }
    },

  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        maxBarThickness: 30,
        data: [90000, 140000, 20000, 150000, 30000, 120000],
        label: 'Revenue'
        
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}

const dollarIndianLocale = Intl.NumberFormat('en-IN');
