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

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.scaleLabel: "<%= ' $' + Number(value)%>"
    scales: {
      x: { max:5,
        
        grid: {
        display: false
        
      }},
      y: {
        max: 250000,
        grid: {
          display: false
        }
        
      } },
      
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        display : false
      } 
    } 
  };
 
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin 
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'January','February','March','April','May','June','July', 'August', 'September', 'October', 'November', 'December' ],
    datasets: [
      {  backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      maxBarThickness: 30,
      
      data: [  90000, 140000, 20000, 150000, 30000, 120000 ], label: "Revenue "   }
     
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
     {
      
    }
   
    
  }

  constructor() { }

  ngOnInit(): void {
  }
  

}
