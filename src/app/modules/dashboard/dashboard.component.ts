import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/shared/services/default.service';
import { ReportData } from 'src/app/shared/models/report-data';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showError: boolean;
  errorMessage: string;
  listDefaultData : ReportData[];
  
  constructor(public service: DefaultService) { 
    this.service.getReportData(sessionStorage.getItem('accessToken')).toPromise().then((value: any)=>{
      if (value.Error)  {
        this.errorMessage = value.Error; 
        this.showError = true; 
      } 
      else{
        this.listDefaultData = value;
        this.showError = false; 
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
          this.barChartLabels = this.listDefaultData.map(a=>a.ReportLabels);
          this.barChartType = 'line';
          this.barChartLegend = true;
          this.barChartData = [
          {
            data: this.listDefaultData.map(a=>a.ReportData),
            label: "Orders"
          },];
        }
    })
  }    
  

  ngOnInit(): void {
    this.service.sideBarOpen = true;
    this.service.updateHeader();
    this.service.updateSidebar();
  }

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
