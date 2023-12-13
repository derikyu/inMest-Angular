import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgApexchartsModule} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public series: any[] = [
    {
      name: 'Requests',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 68, 78, 23],
    },
    {
      name: 'Attendance',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 92, 88],
    },
  ];

  public chart: any = {
    type: 'bar',
    height: 350,
  };

  public title: any = {
    text: '',
    align: 'left',
  };

  public chartOptions: any = {
    series: [33.3, 33.3, 33.3],
    colors: ['#51BDF9', '#0AA38A', '#2166AC'],
    tooltip: {
      fillSeriesColor: true,
    },
    chart: {
      type: 'donut',
    },
    labels: ['Team A', 'Team B', 'Team C'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false, // Set to false to hide the numbers
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

}

