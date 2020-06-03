import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/shared/services/default.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public service: DefaultService) { 
    this.service.getReportData().then(value=>{
      this.barChartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      title: {
        text: 'Orders',
        display: true
      },
      scaleShowVerticalLines : false,
      responsive : true
      };
      this.barChartLabels = this.service.listDefaultData.map(a=>a.ReportLabels);
      this.barChartType = 'line';
      this.barChartLegend = true;
      this.barChartData = [
      {
        data: this.service.listDefaultData.map(a=>a.ReportData),
        label: "Orders"
      },
      ];
    })
  }

  ngOnInit(): void {}

  public barChartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  title: {
    text: 'Orders',
    display: true
  },
  scaleShowVerticalLines : false,
  responsive : true
  };

  public barChartLabels;
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData;
  public barChartColors: [
    {
      backgroundColor: 'rgba(10, 146, 225,0.2)',
      borderColor: 'rgba(10, 146, 225,0.1)',
      pointBackgroundColor: 'blue',
    }
  ]
}
